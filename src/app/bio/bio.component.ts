import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  person$;

  constructor(
    private db: AngularFirestore,
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute,
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.person$ = this.db.collection('people').doc<any>(id).valueChanges();

    this.person$.subscribe(p => {
      this.title.setTitle(p.name);
      this.meta.addTags(
        [
          { name: 'twitter:card', content: 'summary' },
          { name: 'og:url', content: `${location.pathname}` },
          { name: 'og:title', content: p.name },
          { name: 'og:description', content: p.bio },
          { name: 'og:image', content: p.image },
        ]
      );
    });
  }

}
