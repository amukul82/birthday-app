import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor() {}

  getPosts() {
    return [
      {
        title: "First Post",
        sectionId: "1",
        subtitle: "The very first one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Second Post",
        sectionId: "1",
        subtitle: "The very second one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "https://s3.amazonaws.com/tanmay-bucket-edp/mukul/sample2.mp4",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Third Post",
        sectionId: "2",
        subtitle: "The very third one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Fourth Post",
        sectionId: "2",
        subtitle: "The very fourth one",
        isImage: false,
        imageUrl: "",
        isVideo: true,
        videoUrl: "https://s3.amazonaws.com/tanmay-bucket-edp/mukul/sample2.mp4",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Fifth Post",
        sectionId: "3",
        subtitle: "The very fifth one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      },
      {
        title: "Sixth Post",
        sectionId: "3",
        subtitle: "The very sixth one",
        isImage: true,
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        isVideo: false,
        videoUrl: "",
        content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      }
    ];
  }

}