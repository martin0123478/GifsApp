import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) { 
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    }
    if(localStorage.getItem('resultados')){
      this.resultados = JSON.parse(localStorage.getItem('resultados')!)
    }
  }

  private apiKey='c3BW6MB7dGk3Bp23GhLC1kYfzRza5Nin'
  private _historial: string[]=[]
  public resultados: any[] =[]
  


  get historial(){
    return [...this._historial]
  }

  buscarGgifs(querry:string ){
    querry = querry.trim().toLowerCase()
    if(!this._historial.includes(querry)){
      this._historial.unshift(querry)
    }
  //   const params = new HttpParams()
  // .set('api_key',this.apiKey)
    this._historial= this._historial.splice(0,9);
    localStorage.setItem('historial',JSON.stringify(this._historial))
    
    console.log(this._historial)
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=c3BW6MB7dGk3Bp23GhLC1kYfzRza5Nin&q=${querry}&limit=10`)
      .subscribe((resp:any)=>{
        console.log(resp.data)
        this.resultados = resp.data
        localStorage.setItem('resultados',JSON.stringify(this.resultados))
      })
  }

 
}
