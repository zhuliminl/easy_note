package module

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Interface_TeamController interface {
	GetTeamByUserId(c *gin.Context)
}

type teamController struct{}

func (u teamController) GetTeamByUserId(c *gin.Context) {
	TeamService.Speak()
	// Service.Speak()
	UserService.GetUserByUserId("saul")

	c.JSON(http.StatusOK, gin.H{
		"message": "team",
	})

}

func NewTeamController() Interface_TeamController {
	log.Println(">>>>>>>>>>>> NewTeamController")
	return &teamController{}
}
