import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }
  getQuery(query: string){
    const url = `https://api.spotify.com/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCBkpP1ubO4kWdsXKx8nX--J4bHjLLTmI3-nb0NQzrzEpupExivkQOCX6BhLyzk2xacthHQp0LW5NHsQMo'
    });

    return this.http.get(url,{headers});
  }
  getNewReleases(){
    // const headers= new HttpHeaders({//token
    // 'Authorization': 'Bearer BQC4nzhneFB-AVFBzzXhQFxmecM_cCOTXC17xrkfnybjBO9VhKuBtRLGzehqrABWc5Iu3i0zBb5kKBv07cI'
    // })

    return this.getQuery('v1/browse/new-releases')
              .pipe( map(data => data['albums'].items));
              
  }


  getArtistas( termino:string){
    // const headers= new HttpHeaders({//token
    // 'Authorization': 'Bearer BQC4nzhneFB-AVFBzzXhQFxmecM_cCOTXC17xrkfnybjBO9VhKuBtRLGzehqrABWc5Iu3i0zBb5kKBv07cI'
    // })}
    return this.getQuery(`v1/search?q=${termino}&type=artist&limit=15`)
              .pipe( map(data => data['artists'].items));
  }


  getArtista( id:string){
    
    return this.getQuery(`v1/artists/${id}`);
              //  .pipe( map(data => data['artists'].items));
  }

  getTopTracks( id:string){
    
    return this.getQuery(`v1/artists/${ id }/top-tracks?country=us`)
               .pipe( map(data => data['tracks']));
  }
}
