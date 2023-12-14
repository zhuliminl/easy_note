package module

import "log"

type Interface_TeamRepository interface {
}

type teamRepository struct {
}

func NewTeamRepository() Interface_TeamRepository {
	log.Println(">>>>>>>>>>>> NewTeamRepository")
	return &teamRepository{}
}
