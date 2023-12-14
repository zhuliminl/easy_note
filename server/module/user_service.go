package module

import "log"

type Interface_UserService interface {
	GetUserByUserId(userId string) (User, error)
	CreateUser(user User) error
}

type userService struct {
}

func (u userService) CreateUser(user User) error {
	return UserRepository.CreateUser(user)
}

func (u userService) GetUserByUserId(userId string) (User, error) {
	return UserRepository.GetUserById(userId)
}

func NewUserService() Interface_UserService {
	log.Println(">>>>>>>>>>>> NewUserService")
	return &userService{}
}
