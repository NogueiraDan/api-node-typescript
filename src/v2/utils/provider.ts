import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import UserRepository from '../repositories/UserRepository';
import UserModel from '../models/User';

// Crie uma instância do Repository e outras dependências, se necessário
const userModel = UserModel;
const userRepository = new UserRepository(userModel);

// Crie uma instância da classe de Serviço e injete o Repository nela
const userService = new UserService(userRepository);

// Crie uma instância do Controller e injete a classe de serviço nela
const userController = new UserController(userService);


// Exporte os controladores e outros elementos do contêiner, se necessário.
export { userController };
