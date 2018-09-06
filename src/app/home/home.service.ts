import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor() {}

  getPosts() {
    return [
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20170506-WA0003.jpg",
        content: "May 6th 2017",
      },
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20171027-WA0002.jpg",
        content: "October 27th 2017",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20171014-WA0019.jpg",
        content: "October 14th 2017",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180501-WA0000.jpg",
        content: "May 1st 2018",
      },
      {
        title: "Fifth Post",
        sectionId: "3",
        subtitle: "The very fifth one",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180126-WA0017.jpg",
        isVideo: false,
        videoUrl: "",
        content: "January 26th 2018",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180107-WA0009.jpg",
        content: "January 7th 2018",
      },
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180309-WA0011.jpg",
        content: "September 8th 2017",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20171223-WA0024.jpg",
        content: "December 23rd 2017",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20171013-WA0004.jpg",
        content: "October 13th 2017",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180329-WA0002.jpg",
        content: "March 29th 2018",
      },
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180419-WA0007.jpg",
        content: "April 4th 2018",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20171027-WA0001.jpg",
        content: "October 27th 2017",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180419-WA0004.jpg",
        content: "April 19th 2018",
      },
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20170930-WA0003.jpg",
        content: "September 30th 2017",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180310-WA0025.jpg",
        content: "March 10th 2018",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20170928-WA0003.jpg",
        content: "September 28th 2017",
      },
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180323-WA0004.jpg",
        content: "March 23rd 2018",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20170702-WA0006.jpg",
        content: "July 2nd 2017",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG_20180210_201044.jpg",
        content: "February 10th 2018",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20170928-WA0008.jpg",
        content: "September 28th 2017",
      },      
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG_20180210_221817.jpg",
        content: "February 10th 2018",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180406-WA0003.jpg",
        content: "April 6th 2018",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20171223-WA0028.jpg",
        content: "December 23rd 2017",
      },
      {
        sectionId: "1",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180425-WA0007.jpg",
        content: "April 25th 2018",
      },
      {
        sectionId: "2",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG_20180211_082011_HHT.jpg",
        content: "February 11th 2018",
      },
      {
        sectionId: "3",
        isImage: true,
        imageUrl: "../assets/images/preety/IMG-20180425-WA0000.jpg",
        content: "April 25th 2018",
      },      
    ];
  }

}