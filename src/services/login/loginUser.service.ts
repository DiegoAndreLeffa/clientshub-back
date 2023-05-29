import { Repository } from "typeorm";
import { User } from "../../entities";
import { Login } from "../../interfaces/client/client.inteface";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const createLoginService = async (loginData: Login): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail: string = loginData.email;

  const findEmail = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (!findEmail) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPass: boolean = await compare(
    loginData.password,
    findEmail.password
  );

  if (!matchPass) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      userName: findEmail.name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: findEmail.id,
    }
  );

  return token;
};
