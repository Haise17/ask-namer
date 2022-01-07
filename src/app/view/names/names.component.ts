import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-names',
    templateUrl: './names.component.html',
    styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
    ) { }

    ngOnInit(): void {

        this.titleService.setTitle('Names aka Portfolio | Ask Namer');
        this.metaTagService.updateTag(
            { name: 'description', content: '' }
        );

    }

}