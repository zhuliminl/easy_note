package main

import (
	"flag"
	"log"
	"os"

	"github.com/zhuliminl/word_server/config"
)

// @title Word Restful API
// @version.go 1.0
// @termsOfService http://kubeoperator.io
// @contact.name Fit2cloud Support
// @contact.url https://www.fit2cloud.com
// @contact.email support@fit2cloud.com
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name token
func main() {
	environment := flag.String("e", "development", "")
	flag.Usage = func() {
		log.Print("Usage: server -e {mode}")
		os.Exit(1)
	}
	flag.Parse()

	// 载入配置
	config.Init(*environment)
	StartServer()
}
