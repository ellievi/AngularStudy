import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  userModel = new User ();

  mensagem = ""  

    receberDados() {
      console.log(this.userModel)

      const wordsList: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", 
      "by ", "insert ", "exec ", "\"", "\'", "-- ", "# ", "* ", "; "]

      wordsList.forEach(word => {
        if(this.userModel.email?.toLowerCase().includes(word)){
          this.mensagem = "Dados inválidos" + word

          return;
        }
        
      });


      this.loginService.login(this.userModel).subscribe((response) => {
          console.log("Deu certo!")
          localStorage.setItem("nomeUsuario", response.body.user.nome)

          this.router.navigateByUrl("/")
      }, (respostaErro) => {
        console.log("Error")
        alert(respostaErro.error)
      })
    }
}