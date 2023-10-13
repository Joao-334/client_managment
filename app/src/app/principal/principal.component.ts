import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  // OBJETO CLIENTE
  client = new Client();

  // CONTROLADOR DO BOTÃO
  btnRegister: boolean = true;

  //JSON DE CLIENTES
  clients: Client[] = [];

  // CONTROLADOR TABELA
  table: boolean = true;

  // constructor

  constructor(private service: ClientService) {

  }

  changeStates(boolean: boolean, msg: string | false) {
    this.btnRegister = boolean;
    this.table = boolean;

    msg ? alert(msg) : "";
  }

  //Selection method

  selectAllClients(): void {
    this.service.selectAllClients().subscribe(
      returnedClients => this.clients = returnedClients
    );
  }

  //Register method

  registerClient(client: Client): void {
    this.service.registerClient(client).subscribe(
      returnedClient => {
        // coloca no vetor
        this.clients.push(returnedClient);

        // limpa formulário
        this.client = new Client();

        alert("Client registered");
      }
    );
  }

  // Select one client method

  selectClient(position: number): void {
    // Select client in vector

    this.client = this.clients[position];

    // visibily of buttons and table and not send alert
    this.changeStates(false, false);
  }

  // Edit Client method

  updateClient(): void {
    this.service.updateClient(this.client).subscribe(
      updatedClientReturn => {
        // get position of client in vector
        let position = this.clients.findIndex(client => {
          return client.code === updatedClientReturn.code
        });
        // change in the vector
        this.clients[position] = updatedClientReturn;

        // visibily of buttons and table and send alert
        this.changeStates(true, "Updated client successfully");
      }
    );

    this.client = new Client();
  }

  deleteClient(): void {
    this.service.deleteClient(this.client.code).subscribe(
      deleteMessage => {
         // get position of client in vector
         let position = this.clients.findIndex(client => {
          return client.code === this.client.code;
        });
        // delete in the vector
        this.clients.splice(position, 1);

        // visibily of buttons and table and send alert
        this.changeStates(true, "Delete client successfully");
      }
    );

    this.client = new Client();
  }

  cancel(): void {
    this.client = new Client();

    this.changeStates(true, false);
  }

  // Initialization method

  ngOnInit(): void {
    this.selectAllClients();
  }

}
