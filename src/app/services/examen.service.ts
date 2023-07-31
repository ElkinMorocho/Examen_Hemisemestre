import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Clientes } from '../components/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private clientes$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }
  guardarCliente(clientes: Clientes): Promise<any>{
    return this.firestore.collection('cliente').add(clientes);
  }
  listarCliente(): Observable<any>{
    return this.firestore.collection('cliente', ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }
  eliminarCliente(id: string): Promise<any>{
   return this.firestore.collection('cliente').doc(id).delete();
  }
  editarCliente(id: string, clientes: any): Promise<any>{
   return this.firestore.collection('cliente').doc(id).update(clientes);
  }
  addClienteEdit(clientes: Clientes){
    this.clientes$.next(clientes);
  }
  getClienteEdit(id:string): Observable<any>{
    return this.firestore.collection('cliente').doc(id).snapshotChanges();
  }
  getClienteB(id:string): Observable<any>{
    return this.firestore.collection('cliente').doc(id).snapshotChanges();
  }
}
