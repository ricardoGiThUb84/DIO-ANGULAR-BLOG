import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((v) => (this.id = v.get('id')));
    this.renderComponent(this.id);
  }
  photoCover: string =
    'https://hbomax-images.warnermediacdn.com/images/GVU4NYgvPQlFvjSoJAbmL/tile?size=1280x720&format=jpeg&partner=hbocom&v=46e72923a9154f662bf277d0f08160a3&host=art-gallery.api.hbo.com';
  contentTitle: string | null = 'Minha Noticia';
  contentDescription: string = 'ola mundo!';

  renderComponent(id: string | null) {
    const dados = data.find((d) => d.id == Number(id));

    this.contentTitle = dados?.title || '';
    this.contentDescription = dados?.description || '';
    this.photoCover = dados?.photo || '';
  }
}
