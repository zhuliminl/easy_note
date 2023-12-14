package module

import "log"

type Interface_TeamService interface {
	Speak()
}

type teamService struct {
}

func (s teamService) Speak() {

}

func NewTeamService() Interface_TeamService {
	log.Println(">>>>>>>>>>>> NewTeamService")
	return &teamService{}
}
