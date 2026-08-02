import { Book, RegistrationLog, BorrowRecord } from './types';

export const INITIAL_BOOKS: Book[] = [
  {
    "id": "book-he001",
    "registration_number": "HE001",
    "title": "Pilgrims Way",
    "author": "Abdul Razak Gurnah",
    "isbn": "978-1000000000",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Pilgrims Way\" authored by Abdul Razak Gurnah. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE001.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE001-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-27T13:45:35.524Z"
      },
      {
        "id": "rev-HE001-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-26T01:45:35.525Z"
      }
    ],
    "created_at": "2026-05-30T01:45:35.525Z",
    "updated_at": "2026-05-30T01:45:35.525Z"
  },
  {
    "id": "book-he002",
    "registration_number": "HE002",
    "title": "Contemporary Literary and Cultural Theory",
    "author": "Pramod K Nair",
    "isbn": "978-1000000001",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Contemporary Literary and Cultural Theory\" written by Pramod K Nair. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE002.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE002-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-26T13:45:35.525Z"
      },
      {
        "id": "rev-HE002-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-25T13:45:35.525Z"
      }
    ],
    "created_at": "2026-05-30T07:45:35.525Z",
    "updated_at": "2026-05-30T07:45:35.525Z"
  },
  {
    "id": "book-he003",
    "registration_number": "HE003",
    "title": "Little Book Of Wisdom",
    "author": "Kahlil Gibran",
    "isbn": "978-1000000002",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Little Book Of Wisdom\" authored by Kahlil Gibran. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE003.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE003-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-25T13:45:35.525Z"
      },
      {
        "id": "rev-HE003-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-25T01:45:35.525Z"
      }
    ],
    "created_at": "2026-05-30T13:45:35.525Z",
    "updated_at": "2026-05-30T13:45:35.525Z"
  },
  {
    "id": "book-he004",
    "registration_number": "HE004",
    "title": "Working With Emotional Intelligence",
    "author": "Daniel Goleman",
    "isbn": "978-1000000003",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Working With Emotional Intelligence\" written by Daniel Goleman. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE004.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE004-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-24T13:45:35.525Z"
      },
      {
        "id": "rev-HE004-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-24T13:45:35.525Z"
      }
    ],
    "created_at": "2026-05-30T19:45:35.525Z",
    "updated_at": "2026-05-30T19:45:35.525Z"
  },
  {
    "id": "book-he005",
    "registration_number": "HE005",
    "title": "Don't Believe Everything You Think",
    "author": "Joseph Nguyen",
    "isbn": "978-1000000004",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Don't Believe Everything You Think\" written by Joseph Nguyen. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE005.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE005-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-23T13:45:35.525Z"
      },
      {
        "id": "rev-HE005-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-24T01:45:35.525Z"
      }
    ],
    "created_at": "2026-05-31T01:45:35.525Z",
    "updated_at": "2026-05-31T01:45:35.525Z"
  },
  {
    "id": "book-he006",
    "registration_number": "HE006",
    "title": "How To Live Your Life",
    "author": "Ruskin Bond",
    "isbn": "978-1000000005",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"How To Live Your Life\" written by Ruskin Bond. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE006.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE006-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-22T13:45:35.525Z"
      },
      {
        "id": "rev-HE006-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-23T13:45:35.525Z"
      }
    ],
    "created_at": "2026-05-31T07:45:35.525Z",
    "updated_at": "2026-05-31T07:45:35.525Z"
  },
  {
    "id": "book-he007",
    "registration_number": "HE007",
    "title": "I am Malala",
    "author": "Malala Yousafzai",
    "isbn": "978-1000000006",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"I am Malala\" written by Malala Yousafzai. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE007.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE007-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-21T13:45:35.525Z"
      },
      {
        "id": "rev-HE007-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-23T01:45:35.525Z"
      }
    ],
    "created_at": "2026-05-31T13:45:35.525Z",
    "updated_at": "2026-05-31T13:45:35.525Z"
  },
  {
    "id": "book-he008",
    "registration_number": "HE008",
    "title": "Coolie",
    "author": "Mulk Raj Anand",
    "isbn": "978-1000000007",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Coolie\" authored by Mulk Raj Anand. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE008.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE008-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-20T13:45:35.525Z"
      },
      {
        "id": "rev-HE008-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-22T13:45:35.525Z"
      }
    ],
    "created_at": "2026-05-31T19:45:35.525Z",
    "updated_at": "2026-05-31T19:45:35.525Z"
  },
  {
    "id": "book-he009",
    "registration_number": "HE009",
    "title": "Oxford India Short Introduction: The Indian Constitution",
    "author": "Madhav Khosla",
    "isbn": "978-1000000008",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Oxford India Short Introduction: The Indian Constitution\" authored by Madhav Khosla. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE009.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE009-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-19T13:45:35.525Z"
      },
      {
        "id": "rev-HE009-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-22T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-01T01:45:35.525Z",
    "updated_at": "2026-06-01T01:45:35.525Z"
  },
  {
    "id": "book-he010",
    "registration_number": "HE010",
    "title": "Christianity and Politics In Tribal India",
    "author": "G. Kanato Chophy",
    "isbn": "978-1000000009",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Christianity and Politics In Tribal India\" written by G. Kanato Chophy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE010.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE010-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-18T13:45:35.525Z"
      },
      {
        "id": "rev-HE010-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-21T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-01T07:45:35.525Z",
    "updated_at": "2026-06-01T07:45:35.525Z"
  },
  {
    "id": "book-he011",
    "registration_number": "HE011",
    "title": "Martin Luther: Catholic Dissident",
    "author": "Peter Stanford",
    "isbn": "978-1000000010",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Martin Luther: Catholic Dissident\" written by Peter Stanford. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE011.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE011-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-17T13:45:35.525Z"
      },
      {
        "id": "rev-HE011-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-21T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-01T13:45:35.525Z",
    "updated_at": "2026-06-01T13:45:35.525Z"
  },
  {
    "id": "book-he012",
    "registration_number": "HE012",
    "title": "Mishkat Al- Anwar: The Niche For Lights",
    "author": "Al- Ghazali",
    "isbn": "978-1000000011",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Mishkat Al- Anwar: The Niche For Lights\" written by Al- Ghazali. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE012.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE012-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-16T13:45:35.525Z"
      },
      {
        "id": "rev-HE012-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-20T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-01T19:45:35.525Z",
    "updated_at": "2026-06-01T19:45:35.525Z"
  },
  {
    "id": "book-he013",
    "registration_number": "HE013",
    "title": "Swords From The West",
    "author": "Harold lamp",
    "isbn": "978-1000000012",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Swords From The West\" authored by Harold lamp. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE013.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE013-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-15T13:45:35.525Z"
      },
      {
        "id": "rev-HE013-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-20T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-02T01:45:35.525Z",
    "updated_at": "2026-06-02T01:45:35.525Z"
  },
  {
    "id": "book-he014",
    "registration_number": "HE014",
    "title": "Complete Works Of Sherlock Holmes",
    "author": "Sir Arther Conan Doyle",
    "isbn": "978-1000000013",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Complete Works Of Sherlock Holmes\" authored by Sir Arther Conan Doyle. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE014.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE014-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-14T13:45:35.525Z"
      },
      {
        "id": "rev-HE014-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-19T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-02T07:45:35.525Z",
    "updated_at": "2026-06-02T07:45:35.525Z"
  },
  {
    "id": "book-he015",
    "registration_number": "HE015",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "isbn": "978-1000000014",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Oliver Twist\" authored by Charles Dickens. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE015.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE015-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-13T13:45:35.525Z"
      },
      {
        "id": "rev-HE015-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-19T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-02T13:45:35.525Z",
    "updated_at": "2026-06-02T13:45:35.525Z"
  },
  {
    "id": "book-he016",
    "registration_number": "HE016",
    "title": "Selection From The Prison Notebooks",
    "author": "Antonio Gramsci",
    "isbn": "978-1000000015",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Selection From The Prison Notebooks\" written by Antonio Gramsci. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE016.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE016-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-12T13:45:35.525Z"
      },
      {
        "id": "rev-HE016-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-18T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-02T19:45:35.525Z",
    "updated_at": "2026-06-02T19:45:35.525Z"
  },
  {
    "id": "book-he017",
    "registration_number": "HE017",
    "title": "Nature Cures Not Medicine",
    "author": "Dr P A Kareem",
    "isbn": "978-1000000016",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Nature Cures Not Medicine\" written by Dr P A Kareem. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE017.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE017-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-11T13:45:35.525Z"
      },
      {
        "id": "rev-HE017-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-18T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-03T01:45:35.525Z",
    "updated_at": "2026-06-03T01:45:35.525Z"
  },
  {
    "id": "book-he018",
    "registration_number": "HE018",
    "title": "Yamani: The Inside Story",
    "author": "Jeffrey Robinson",
    "isbn": "978-1000000017",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Yamani: The Inside Story\" written by Jeffrey Robinson. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE018.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE018-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-10T13:45:35.525Z"
      },
      {
        "id": "rev-HE018-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-17T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-03T07:45:35.525Z",
    "updated_at": "2026-06-03T07:45:35.525Z"
  },
  {
    "id": "book-he019",
    "registration_number": "HE019",
    "title": "Cancer Man To Iron Man",
    "author": "Nidhin Valsan",
    "isbn": "978-1000000018",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Cancer Man To Iron Man\" written by Nidhin Valsan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE019.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE019-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-09T13:45:35.525Z"
      },
      {
        "id": "rev-HE019-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-17T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-03T13:45:35.525Z",
    "updated_at": "2026-06-03T13:45:35.525Z"
  },
  {
    "id": "book-he020",
    "registration_number": "HE020",
    "title": "Panchatantra",
    "author": "Vishnu Sharma",
    "isbn": "978-1000000019",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Panchatantra\" authored by Vishnu Sharma. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE020.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE020-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-08T13:45:35.525Z"
      },
      {
        "id": "rev-HE020-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-16T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-03T19:45:35.525Z",
    "updated_at": "2026-06-03T19:45:35.525Z"
  },
  {
    "id": "book-he021",
    "registration_number": "HE021",
    "title": "DIARY of a Wimpy Kid 'DOG DAYS'",
    "author": "Jeff Kinney",
    "isbn": "978-1000000020",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"DIARY of a Wimpy Kid 'DOG DAYS'\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE021.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE021-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-07T13:45:35.525Z"
      },
      {
        "id": "rev-HE021-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-16T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-04T01:45:35.525Z",
    "updated_at": "2026-06-04T01:45:35.525Z"
  },
  {
    "id": "book-he022",
    "registration_number": "HE022",
    "title": "DIARY of a Wimpy Kid 'HARD LUCK'",
    "author": "Jeff Kinney",
    "isbn": "978-1000000021",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"DIARY of a Wimpy Kid 'HARD LUCK'\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE022.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE022-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-06T13:45:35.525Z"
      },
      {
        "id": "rev-HE022-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-15T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-04T07:45:35.525Z",
    "updated_at": "2026-06-04T07:45:35.525Z"
  },
  {
    "id": "book-he023",
    "registration_number": "HE023",
    "title": "DIARY of a Wimpy Kid 'OLD SCHOOL'",
    "author": "Jeff Kinney",
    "isbn": "978-1000000022",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"DIARY of a Wimpy Kid 'OLD SCHOOL'\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE023.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE023-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-05T13:45:35.525Z"
      },
      {
        "id": "rev-HE023-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-15T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-04T13:45:35.525Z",
    "updated_at": "2026-06-04T13:45:35.525Z"
  },
  {
    "id": "book-he024",
    "registration_number": "HE024",
    "title": "The Gopi Diaries 'COMING HOME'",
    "author": "Sudha Murty",
    "isbn": "978-1000000023",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Gopi Diaries 'COMING HOME'\" authored by Sudha Murty. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE024.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE024-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-04T13:45:35.525Z"
      },
      {
        "id": "rev-HE024-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-14T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-04T19:45:35.525Z",
    "updated_at": "2026-06-04T19:45:35.525Z"
  },
  {
    "id": "book-he025",
    "registration_number": "HE025",
    "title": "Little Book Of Secret",
    "author": "Kahlil Gibran",
    "isbn": "978-1000000024",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Little Book Of Secret\" written by Kahlil Gibran. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE025.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE025-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-03T13:45:35.525Z"
      },
      {
        "id": "rev-HE025-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-14T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-05T01:45:35.525Z",
    "updated_at": "2026-06-05T01:45:35.525Z"
  },
  {
    "id": "book-he026",
    "registration_number": "HE026",
    "title": "Hard Times",
    "author": "Cherles Dickens",
    "isbn": "978-1000000025",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Hard Times\" authored by Cherles Dickens. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE026.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE026-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-02T13:45:35.525Z"
      },
      {
        "id": "rev-HE026-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-13T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-05T07:45:35.525Z",
    "updated_at": "2026-06-05T07:45:35.525Z"
  },
  {
    "id": "book-he027",
    "registration_number": "HE027",
    "title": "Three Chinese Poets",
    "author": "Vikram Seth",
    "isbn": "978-1000000026",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Three Chinese Poets\" written by Vikram Seth. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE027.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE027-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-01T13:45:35.525Z"
      },
      {
        "id": "rev-HE027-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-13T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-05T13:45:35.525Z",
    "updated_at": "2026-06-05T13:45:35.525Z"
  },
  {
    "id": "book-he028",
    "registration_number": "HE028",
    "title": "The Prophet",
    "author": "Kahlil Gibran",
    "isbn": "978-1000000027",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Prophet\" authored by Kahlil Gibran. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE028.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE028-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-06-30T13:45:35.525Z"
      },
      {
        "id": "rev-HE028-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-12T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-05T19:45:35.525Z",
    "updated_at": "2026-06-05T19:45:35.525Z"
  },
  {
    "id": "book-he029",
    "registration_number": "HE029",
    "title": "The Tale Of The For Porcupine Man",
    "author": "Folktales From Africa",
    "isbn": "978-1000000028",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Tale Of The For Porcupine Man\" authored by Folktales From Africa. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE029.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE029-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-06-29T13:45:35.525Z"
      },
      {
        "id": "rev-HE029-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-12T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-06T01:45:35.525Z",
    "updated_at": "2026-06-06T01:45:35.525Z"
  },
  {
    "id": "book-he030",
    "registration_number": "HE030",
    "title": "The Little Purse With Two Half Pennies",
    "author": "Folktales From Romania",
    "isbn": "978-1000000029",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Little Purse With Two Half Pennies\" authored by Folktales From Romania. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE030.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE030-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-06-28T13:45:35.525Z"
      },
      {
        "id": "rev-HE030-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-11T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-06T07:45:35.525Z",
    "updated_at": "2026-06-06T07:45:35.525Z"
  },
  {
    "id": "book-he031",
    "registration_number": "HE031",
    "title": "The Singing Three And The Speaking Bird",
    "author": "Folktales From Russia",
    "isbn": "978-1000000030",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Singing Three And The Speaking Bird\" authored by Folktales From Russia. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE031.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE031-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-06-27T13:45:35.525Z"
      },
      {
        "id": "rev-HE031-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-11T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-06T13:45:35.525Z",
    "updated_at": "2026-06-06T13:45:35.525Z"
  },
  {
    "id": "book-he032",
    "registration_number": "HE032",
    "title": "The Outcast Prince",
    "author": "Folktales From Israel",
    "isbn": "978-1000000031",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Outcast Prince\" authored by Folktales From Israel. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE032.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE032-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-06-26T13:45:35.525Z"
      },
      {
        "id": "rev-HE032-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-10T13:45:35.525Z"
      }
    ],
    "created_at": "2026-06-06T19:45:35.525Z",
    "updated_at": "2026-06-06T19:45:35.525Z"
  },
  {
    "id": "book-he033",
    "registration_number": "HE033",
    "title": "The Little Fred and His Fiddle",
    "author": "Folktales From Norway",
    "isbn": "978-1000000032",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Little Fred and His Fiddle\" authored by Folktales From Norway. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE033.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE033-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-06-25T13:45:35.525Z"
      },
      {
        "id": "rev-HE033-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-07-10T01:45:35.525Z"
      }
    ],
    "created_at": "2026-06-07T01:45:35.525Z",
    "updated_at": "2026-06-07T01:45:35.526Z"
  },
  {
    "id": "book-he034",
    "registration_number": "HE034",
    "title": "MOBYDICK or, The Whale",
    "author": "Herman Melville",
    "isbn": "978-1000000033",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"MOBYDICK or, The Whale\" authored by Herman Melville. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE034.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE034-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-06-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE034-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-07-09T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-07T07:45:35.526Z",
    "updated_at": "2026-06-07T07:45:35.526Z"
  },
  {
    "id": "book-he035",
    "registration_number": "HE035",
    "title": "The Old Man And The Sea",
    "author": "Ernest Hemingway",
    "isbn": "978-1000000034",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Old Man And The Sea\" authored by Ernest Hemingway. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE035.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE035-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-06-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE035-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-07-09T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-07T13:45:35.526Z",
    "updated_at": "2026-06-07T13:45:35.526Z"
  },
  {
    "id": "book-he036",
    "registration_number": "HE036",
    "title": "Swami And Friends",
    "author": "R.K Narayan",
    "isbn": "978-1000000035",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Swami And Friends\" authored by R.K Narayan. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE036.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE036-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-06-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE036-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-08T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-07T19:45:35.526Z",
    "updated_at": "2026-06-07T19:45:35.526Z"
  },
  {
    "id": "book-he037",
    "registration_number": "HE037",
    "title": "Contemporary English Grammar Structures And Composition",
    "author": "David Green",
    "isbn": "978-1000000036",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Contemporary English Grammar Structures And Composition\" written by David Green. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE037.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE037-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE037-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-08T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-08T01:45:35.526Z",
    "updated_at": "2026-06-08T01:45:35.526Z"
  },
  {
    "id": "book-he038",
    "registration_number": "HE038",
    "title": "Cambridge English Pronouncing Dictionary 18th Edition",
    "author": "Daniel jones",
    "isbn": "978-1000000037",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Cambridge English Pronouncing Dictionary 18th Edition\" written by Daniel jones. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE038.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE038-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE038-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-07T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-08T07:45:35.526Z",
    "updated_at": "2026-06-08T07:45:35.526Z"
  },
  {
    "id": "book-he039",
    "registration_number": "HE039",
    "title": "New Dimensions And Challenges For Human Rights",
    "author": "Janusz Dymonides",
    "isbn": "978-1000000038",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"New Dimensions And Challenges For Human Rights\" written by Janusz Dymonides. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE039.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE039-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE039-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-07T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-08T13:45:35.526Z",
    "updated_at": "2026-06-08T13:45:35.526Z"
  },
  {
    "id": "book-he040",
    "registration_number": "HE040",
    "title": "Oxford Pocket Basic English Usage",
    "author": "Micheal Swan",
    "isbn": "978-1000000039",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Oxford Pocket Basic English Usage\" written by Micheal Swan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE040.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE040-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE040-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-06T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-08T19:45:35.526Z",
    "updated_at": "2026-06-08T19:45:35.526Z"
  },
  {
    "id": "book-he041",
    "registration_number": "HE041",
    "title": "An Autobiography Or The Story Of My Experiments With The Truth",
    "author": "Mahatma Gandhi",
    "isbn": "978-1000000040",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"An Autobiography Or The Story Of My Experiments With The Truth\" written by Mahatma Gandhi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE041.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE041-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE041-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-06T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-09T01:45:35.526Z",
    "updated_at": "2026-06-09T01:45:35.526Z"
  },
  {
    "id": "book-he042",
    "registration_number": "HE042",
    "title": "An Autobiography Or The Story Of My Experiments With The Truth",
    "author": "Mahatma Gandhi",
    "isbn": "978-1000000041",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"An Autobiography Or The Story Of My Experiments With The Truth\" written by Mahatma Gandhi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE042.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE042-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE042-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-05T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-09T07:45:35.526Z",
    "updated_at": "2026-06-09T07:45:35.526Z"
  },
  {
    "id": "book-he043",
    "registration_number": "HE043",
    "title": "Mohandas Karamchand Gandhi Restless as Mercury",
    "author": "Gopalakrishna Gandhi",
    "isbn": "978-1000000042",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Mohandas Karamchand Gandhi Restless as Mercury\" written by Gopalakrishna Gandhi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE043.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE043-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE043-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-05T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-09T13:45:35.526Z",
    "updated_at": "2026-06-09T13:45:35.526Z"
  },
  {
    "id": "book-he044",
    "registration_number": "HE044",
    "title": "Gulliver's Travel",
    "author": "Jonathan Swift",
    "isbn": "978-1000000043",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Gulliver's Travel\" authored by Jonathan Swift. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE044.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE044-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-06-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE044-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-07-04T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-09T19:45:35.526Z",
    "updated_at": "2026-06-09T19:45:35.526Z"
  },
  {
    "id": "book-he045",
    "registration_number": "HE045",
    "title": "Journalism: A Manual For Budding Reporters",
    "author": "Dr. Francis Karackat SDB",
    "isbn": "978-1000000044",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Journalism: A Manual For Budding Reporters\" written by Dr. Francis Karackat SDB. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE045.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE045-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE045-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-04T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-10T01:45:35.526Z",
    "updated_at": "2026-06-10T01:45:35.526Z"
  },
  {
    "id": "book-he046",
    "registration_number": "HE046",
    "title": "Wings of Fire: An Autobiography",
    "author": "APJ Abdul Kalam",
    "isbn": "978-1000000045",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Wings of Fire: An Autobiography\" written by APJ Abdul Kalam. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE046.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE046-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE046-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-03T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-10T07:45:35.526Z",
    "updated_at": "2026-06-10T07:45:35.526Z"
  },
  {
    "id": "book-he047",
    "registration_number": "HE047",
    "title": "The Great Speeches",
    "author": "Dr. RK Pruthi",
    "isbn": "978-1000000046",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Great Speeches\" written by Dr. RK Pruthi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE047.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE047-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE047-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-03T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-10T13:45:35.526Z",
    "updated_at": "2026-06-10T13:45:35.526Z"
  },
  {
    "id": "book-he048",
    "registration_number": "HE048",
    "title": "Fundraising for Dummies",
    "author": "John Mutz & Katherine Murray",
    "isbn": "978-1000000047",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Fundraising for Dummies\" written by John Mutz & Katherine Murray. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE048.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE048-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE048-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-07-02T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-10T19:45:35.526Z",
    "updated_at": "2026-06-10T19:45:35.526Z"
  },
  {
    "id": "book-he049",
    "registration_number": "HE049",
    "title": "History of English Literature",
    "author": "Edward Albert",
    "isbn": "978-1000000048",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"History of English Literature\" written by Edward Albert. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE049.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE049-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE049-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-07-02T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-11T01:45:35.526Z",
    "updated_at": "2026-06-11T01:45:35.526Z"
  },
  {
    "id": "book-he050",
    "registration_number": "HE050",
    "title": "English Literature",
    "author": "William J. Long",
    "isbn": "978-1000000049",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"English Literature\" written by William J. Long. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE050.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE050-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE050-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-07-01T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-11T07:45:35.526Z",
    "updated_at": "2026-06-11T07:45:35.526Z"
  },
  {
    "id": "book-he051",
    "registration_number": "HE051",
    "title": "Professional education in India",
    "author": "P. Satyanarayan",
    "isbn": "978-1000000050",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Professional education in India\" written by P. Satyanarayan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE051.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE051-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE051-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-07-01T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-11T13:45:35.526Z",
    "updated_at": "2026-06-11T13:45:35.526Z"
  },
  {
    "id": "book-he052",
    "registration_number": "HE052",
    "title": "National Education Policy 2020",
    "author": "Pankaj Arora & Haneet Gandhi",
    "isbn": "978-1000000051",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"National Education Policy 2020\" written by Pankaj Arora & Haneet Gandhi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE052.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE052-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-06T13:45:35.526Z"
      },
      {
        "id": "rev-HE052-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-30T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-11T19:45:35.526Z",
    "updated_at": "2026-06-11T19:45:35.526Z"
  },
  {
    "id": "book-he053",
    "registration_number": "HE053",
    "title": "A Comedian Sees The World",
    "author": "Charlie Chaplin",
    "isbn": "978-1000000052",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"A Comedian Sees The World\" written by Charlie Chaplin. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE053.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE053-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-05T13:45:35.526Z"
      },
      {
        "id": "rev-HE053-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-30T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-12T01:45:35.526Z",
    "updated_at": "2026-06-12T01:45:35.526Z"
  },
  {
    "id": "book-he054",
    "registration_number": "HE054",
    "title": "Intermediate English grammar",
    "author": "Raymond Murphy",
    "isbn": "978-1000000053",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Intermediate English grammar\" written by Raymond Murphy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE054.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE054-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-04T13:45:35.526Z"
      },
      {
        "id": "rev-HE054-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-29T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-12T07:45:35.526Z",
    "updated_at": "2026-06-12T07:45:35.526Z"
  },
  {
    "id": "book-he055",
    "registration_number": "HE055",
    "title": "Cambridge English Pronouncing Dictionary 18th Edition",
    "author": "Daniel Jones",
    "isbn": "978-1000000054",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Cambridge English Pronouncing Dictionary 18th Edition\" written by Daniel Jones. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE055.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE055-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-03T13:45:35.526Z"
      },
      {
        "id": "rev-HE055-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-29T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-12T13:45:35.526Z",
    "updated_at": "2026-06-12T13:45:35.526Z"
  },
  {
    "id": "book-he056",
    "registration_number": "HE056",
    "title": "Bioinformatics: Genomics and Proteomics",
    "author": "Ruchi Singh",
    "isbn": "978-1000000055",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Bioinformatics: Genomics and Proteomics\" written by Ruchi Singh. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE056.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE056-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-02T13:45:35.526Z"
      },
      {
        "id": "rev-HE056-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-28T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-12T19:45:35.526Z",
    "updated_at": "2026-06-12T19:45:35.526Z"
  },
  {
    "id": "book-he057",
    "registration_number": "HE057",
    "title": "Mass Communication: Principles And Concepts",
    "author": "Seema Hasan",
    "isbn": "978-1000000056",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Mass Communication: Principles And Concepts\" written by Seema Hasan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE057.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE057-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-01T13:45:35.526Z"
      },
      {
        "id": "rev-HE057-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-28T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-13T01:45:35.526Z",
    "updated_at": "2026-06-13T01:45:35.526Z"
  },
  {
    "id": "book-he058",
    "registration_number": "HE058",
    "title": "World's Greatest Essays",
    "author": "Arthur Benson",
    "isbn": "978-1000000057",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"World's Greatest Essays\" written by Arthur Benson. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE058.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE058-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-31T13:45:35.526Z"
      },
      {
        "id": "rev-HE058-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-27T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-13T07:45:35.526Z",
    "updated_at": "2026-06-13T07:45:35.526Z"
  },
  {
    "id": "book-he059",
    "registration_number": "HE059",
    "title": "Leo Tolstoy stories for children 'The Elephant'",
    "author": "Alexander Kuprin",
    "isbn": "978-1000000058",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Leo Tolstoy stories for children 'The Elephant'\" authored by Alexander Kuprin. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE059.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE059-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-30T13:45:35.526Z"
      },
      {
        "id": "rev-HE059-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-06-27T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-13T13:45:35.526Z",
    "updated_at": "2026-06-13T13:45:35.526Z"
  },
  {
    "id": "book-he060",
    "registration_number": "HE060",
    "title": "The legend of stonecutter",
    "author": "R. Kushnerovich",
    "isbn": "978-1000000059",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The legend of stonecutter\" authored by R. Kushnerovich. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE060.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE060-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-05-29T13:45:35.526Z"
      },
      {
        "id": "rev-HE060-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-06-26T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-13T19:45:35.526Z",
    "updated_at": "2026-06-13T19:45:35.526Z"
  },
  {
    "id": "book-he061",
    "registration_number": "HE061",
    "title": "The Master And the labour",
    "author": "A Ukraine Folk Tale",
    "isbn": "978-1000000060",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Master And the labour\" authored by A Ukraine Folk Tale. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE061.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE061-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-28T13:45:35.526Z"
      },
      {
        "id": "rev-HE061-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-06-26T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-14T01:45:35.526Z",
    "updated_at": "2026-06-14T01:45:35.526Z"
  },
  {
    "id": "book-he062",
    "registration_number": "HE062",
    "title": "The Lion And The Dog",
    "author": "Leo Tolstoy",
    "isbn": "978-1000000061",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Lion And The Dog\" authored by Leo Tolstoy. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE062.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE062-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-05-27T13:45:35.526Z"
      },
      {
        "id": "rev-HE062-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-06-25T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-14T07:45:35.526Z",
    "updated_at": "2026-06-14T07:45:35.526Z"
  },
  {
    "id": "book-he063",
    "registration_number": "HE063",
    "title": "The Frog Went Travelling",
    "author": "Vsevolod Garshin",
    "isbn": "978-1000000062",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Frog Went Travelling\" authored by Vsevolod Garshin. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE063.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE063-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-26T13:45:35.526Z"
      },
      {
        "id": "rev-HE063-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-06-25T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-14T13:45:35.526Z",
    "updated_at": "2026-06-14T13:45:35.526Z"
  },
  {
    "id": "book-he064",
    "registration_number": "HE064",
    "title": "practical English usage  'New'",
    "author": "Michael Swan",
    "isbn": "978-1000000063",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"practical English usage  'New'\" written by Michael Swan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE064.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE064-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-25T13:45:35.526Z"
      },
      {
        "id": "rev-HE064-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-24T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-14T19:45:35.526Z",
    "updated_at": "2026-06-14T19:45:35.526Z"
  },
  {
    "id": "book-he065",
    "registration_number": "HE065",
    "title": "Introduction to robotics mechanics and control",
    "author": "John J Craig",
    "isbn": "978-1000000064",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Introduction to robotics mechanics and control\" written by John J Craig. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE065.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE065-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE065-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-24T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-15T01:45:35.526Z",
    "updated_at": "2026-06-15T01:45:35.526Z"
  },
  {
    "id": "book-he066",
    "registration_number": "HE066",
    "title": "Oxford advanced learners dictionary 10th edition",
    "author": "Oxford Editors",
    "isbn": "978-1000000065",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Oxford advanced learners dictionary 10th edition\" written by Oxford Editors. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE066.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE066-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE066-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-23T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-15T07:45:35.526Z",
    "updated_at": "2026-06-15T07:45:35.526Z"
  },
  {
    "id": "book-he067",
    "registration_number": "HE067",
    "title": "General knowledge manual 2022 20th edition",
    "author": "Edgar Thope,Showick Thope",
    "isbn": "978-1000000066",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"General knowledge manual 2022 20th edition\" written by Edgar Thope,Showick Thope. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE067.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE067-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE067-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-23T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-15T13:45:35.526Z",
    "updated_at": "2026-06-15T13:45:35.526Z"
  },
  {
    "id": "book-he068",
    "registration_number": "HE068",
    "title": "Wafadari Imaandari Zimmedari : War Room to Boardroom",
    "author": "LT Gen. KJS Tiny Dhillon (RETD)",
    "isbn": "978-1000000067",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Wafadari Imaandari Zimmedari : War Room to Boardroom\" written by LT Gen. KJS Tiny Dhillon (RETD). Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE068.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE068-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE068-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-22T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-15T19:45:35.526Z",
    "updated_at": "2026-06-15T19:45:35.526Z"
  },
  {
    "id": "book-he069",
    "registration_number": "HE069",
    "title": "The Power Of Positive Thinking",
    "author": "Norman Vincent Peale",
    "isbn": "978-1000000068",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Power Of Positive Thinking\" written by Norman Vincent Peale. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE069.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE069-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE069-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-22T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-16T01:45:35.526Z",
    "updated_at": "2026-06-16T01:45:35.526Z"
  },
  {
    "id": "book-he070",
    "registration_number": "HE070",
    "title": "The Power Of Your Subconscious Mind",
    "author": "Joseph Murphy",
    "isbn": "978-1000000069",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Power Of Your Subconscious Mind\" written by Joseph Murphy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE070.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE070-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE070-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-21T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-16T07:45:35.526Z",
    "updated_at": "2026-06-16T07:45:35.526Z"
  },
  {
    "id": "book-he071",
    "registration_number": "HE071",
    "title": "The Psychology Of Money",
    "author": "Morgan Housel",
    "isbn": "978-1000000070",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Psychology Of Money\" written by Morgan Housel. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE071.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE071-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE071-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-21T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-16T13:45:35.526Z",
    "updated_at": "2026-06-16T13:45:35.526Z"
  },
  {
    "id": "book-he072",
    "registration_number": "HE072",
    "title": "Mossad: The Greatest Missions Of The Israel Secret Service",
    "author": "Michael Bar-Zohar & Nissim Mishal",
    "isbn": "978-1000000071",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Mossad: The Greatest Missions Of The Israel Secret Service\" written by Michael Bar-Zohar & Nissim Mishal. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE072.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE072-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE072-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-20T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-16T19:45:35.526Z",
    "updated_at": "2026-06-16T19:45:35.526Z"
  },
  {
    "id": "book-he073",
    "registration_number": "HE073",
    "title": "The Chola Tigers: Avengers of Somanath",
    "author": "Amish",
    "isbn": "978-1000000072",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Chola Tigers: Avengers of Somanath\" authored by Amish. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE073.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE073-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE073-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-06-20T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-17T01:45:35.526Z",
    "updated_at": "2026-06-17T01:45:35.526Z"
  },
  {
    "id": "book-he074",
    "registration_number": "HE074",
    "title": "The 5 Am Club",
    "author": "Robin Sharma",
    "isbn": "978-1000000073",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The 5 Am Club\" written by Robin Sharma. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE074.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE074-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE074-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-19T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-17T07:45:35.526Z",
    "updated_at": "2026-06-17T07:45:35.526Z"
  },
  {
    "id": "book-he075",
    "registration_number": "HE075",
    "title": "The Circle Of Life",
    "author": "Sudha Murthy",
    "isbn": "978-1000000074",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Circle Of Life\" authored by Sudha Murthy. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE075.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE075-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE075-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-06-19T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-17T13:45:35.526Z",
    "updated_at": "2026-06-17T13:45:35.526Z"
  },
  {
    "id": "book-he076",
    "registration_number": "HE076",
    "title": "Bookless In Baghdad and Other Writings About Reading",
    "author": "Shashi Tharoor",
    "isbn": "978-1000000075",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Bookless In Baghdad and Other Writings About Reading\" written by Shashi Tharoor. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE076.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE076-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE076-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-18T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-17T19:45:35.526Z",
    "updated_at": "2026-06-17T19:45:35.526Z"
  },
  {
    "id": "book-he077",
    "registration_number": "HE077",
    "title": "Deep Work",
    "author": "Cal Newport",
    "isbn": "978-1000000076",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Deep Work\" written by Cal Newport. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE077.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE077-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE077-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-18T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-18T01:45:35.526Z",
    "updated_at": "2026-06-18T01:45:35.526Z"
  },
  {
    "id": "book-he078",
    "registration_number": "HE078",
    "title": "Pax Indica",
    "author": "Shashi Tharoor",
    "isbn": "978-1000000077",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Pax Indica\" written by Shashi Tharoor. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE078.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE078-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE078-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-17T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-18T07:45:35.526Z",
    "updated_at": "2026-06-18T07:45:35.526Z"
  },
  {
    "id": "book-he079",
    "registration_number": "HE079",
    "title": "India: From Midnight To The Millennium And Beyond",
    "author": "Shashi Tharoor",
    "isbn": "978-1000000078",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"India: From Midnight To The Millennium And Beyond\" written by Shashi Tharoor. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE079.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE079-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE079-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-17T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-18T13:45:35.526Z",
    "updated_at": "2026-06-18T13:45:35.526Z"
  },
  {
    "id": "book-he080",
    "registration_number": "HE080",
    "title": "The Essential Ambedkar",
    "author": "Balachandra Mungekar",
    "isbn": "978-1000000079",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Essential Ambedkar\" written by Balachandra Mungekar. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE080.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE080-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE080-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-16T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-18T19:45:35.526Z",
    "updated_at": "2026-06-18T19:45:35.526Z"
  },
  {
    "id": "book-he081",
    "registration_number": "HE081",
    "title": "The Monk Who Sold His Ferrari",
    "author": "Robin Sharma",
    "isbn": "978-1000000080",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Monk Who Sold His Ferrari\" authored by Robin Sharma. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE081.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE081-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE081-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-06-16T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-19T01:45:35.526Z",
    "updated_at": "2026-06-19T01:45:35.526Z"
  },
  {
    "id": "book-he082",
    "registration_number": "HE082",
    "title": "Live While You Are Alive",
    "author": "Shiv Khera",
    "isbn": "978-1000000081",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Live While You Are Alive\" written by Shiv Khera. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE082.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE082-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE082-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-15T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-19T07:45:35.526Z",
    "updated_at": "2026-06-19T07:45:35.526Z"
  },
  {
    "id": "book-he083",
    "registration_number": "HE083",
    "title": "You Can Win",
    "author": "Shiv Khera",
    "isbn": "978-1000000082",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"You Can Win\" written by Shiv Khera. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE083.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE083-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-06T13:45:35.526Z"
      },
      {
        "id": "rev-HE083-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-15T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-19T13:45:35.526Z",
    "updated_at": "2026-06-19T13:45:35.526Z"
  },
  {
    "id": "book-he084",
    "registration_number": "HE084",
    "title": "End Game",
    "author": "Jeffrey Archer",
    "isbn": "978-1000000083",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"End Game\" authored by Jeffrey Archer. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE084.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE084-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-05-05T13:45:35.526Z"
      },
      {
        "id": "rev-HE084-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-06-14T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-19T19:45:35.526Z",
    "updated_at": "2026-06-19T19:45:35.526Z"
  },
  {
    "id": "book-he085",
    "registration_number": "HE085",
    "title": "In The Silence You Left Behind",
    "author": "Sumitra Manda",
    "isbn": "978-1000000084",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"In The Silence You Left Behind\" authored by Sumitra Manda. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE085.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE085-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-04T13:45:35.526Z"
      },
      {
        "id": "rev-HE085-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-06-14T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-20T01:45:35.526Z",
    "updated_at": "2026-06-20T01:45:35.526Z"
  },
  {
    "id": "book-he086",
    "registration_number": "HE086",
    "title": "Azadi: Freedom. Fascism. Fiction",
    "author": "Arundhati Roy",
    "isbn": "978-1000000085",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Azadi: Freedom. Fascism. Fiction\" written by Arundhati Roy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE086.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE086-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-03T13:45:35.526Z"
      },
      {
        "id": "rev-HE086-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-13T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-20T07:45:35.526Z",
    "updated_at": "2026-06-20T07:45:35.526Z"
  },
  {
    "id": "book-he087",
    "registration_number": "HE087",
    "title": "In Other Words",
    "author": "Jhumpa Lahiri",
    "isbn": "978-1000000086",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"In Other Words\" written by Jhumpa Lahiri. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE087.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE087-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-02T13:45:35.526Z"
      },
      {
        "id": "rev-HE087-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-13T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-20T13:45:35.526Z",
    "updated_at": "2026-06-20T13:45:35.526Z"
  },
  {
    "id": "book-he088",
    "registration_number": "HE088",
    "title": "Here, There And Everywhere",
    "author": "Sudha Murthy",
    "isbn": "978-1000000087",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Here, There And Everywhere\" written by Sudha Murthy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE088.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE088-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-01T13:45:35.526Z"
      },
      {
        "id": "rev-HE088-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-12T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-20T19:45:35.526Z",
    "updated_at": "2026-06-20T19:45:35.526Z"
  },
  {
    "id": "book-he089",
    "registration_number": "HE089",
    "title": "The Neuroscience Of Manifesting",
    "author": "Dr Sabina Brennan",
    "isbn": "978-1000000088",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Neuroscience Of Manifesting\" written by Dr Sabina Brennan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE089.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE089-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-30T13:45:35.526Z"
      },
      {
        "id": "rev-HE089-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-12T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-21T01:45:35.526Z",
    "updated_at": "2026-06-21T01:45:35.526Z"
  },
  {
    "id": "book-he090",
    "registration_number": "HE090",
    "title": "Common Yet Uncommon",
    "author": "Sudha Murthy",
    "isbn": "978-1000000089",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Common Yet Uncommon\" written by Sudha Murthy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE090.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE090-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-29T13:45:35.526Z"
      },
      {
        "id": "rev-HE090-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-11T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-21T07:45:35.526Z",
    "updated_at": "2026-06-21T07:45:35.526Z"
  },
  {
    "id": "book-he091",
    "registration_number": "HE091",
    "title": "The Prince and The Yaka",
    "author": "Folktales From Sri Lanka",
    "isbn": "978-1000000090",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Prince and The Yaka\" authored by Folktales From Sri Lanka. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE091.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE091-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-28T13:45:35.526Z"
      },
      {
        "id": "rev-HE091-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-06-11T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-21T13:45:35.526Z",
    "updated_at": "2026-06-21T13:45:35.526Z"
  },
  {
    "id": "book-he092",
    "registration_number": "HE092",
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "isbn": "978-1000000091",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"A Brief History of Time\" written by Stephen Hawking. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE092.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE092-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-27T13:45:35.526Z"
      },
      {
        "id": "rev-HE092-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-10T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-21T19:45:35.526Z",
    "updated_at": "2026-06-21T19:45:35.526Z"
  },
  {
    "id": "book-he093",
    "registration_number": "HE093",
    "title": "Madam Commissioner - The Extraordinary Life of an Indian Police Chief",
    "author": "Meeran Chadha Borwankar",
    "isbn": "978-1000000092",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Madam Commissioner - The Extraordinary Life of an Indian Police Chief\" written by Meeran Chadha Borwankar. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE093.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE093-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-26T13:45:35.526Z"
      },
      {
        "id": "rev-HE093-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-10T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-22T01:45:35.526Z",
    "updated_at": "2026-06-22T01:45:35.526Z"
  },
  {
    "id": "book-he094",
    "registration_number": "HE094",
    "title": "Kaizen",
    "author": "Sarah Harvey",
    "isbn": "978-1000000093",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Kaizen\" written by Sarah Harvey. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE094.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE094-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-25T13:45:35.526Z"
      },
      {
        "id": "rev-HE094-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-09T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-22T07:45:35.526Z",
    "updated_at": "2026-06-22T07:45:35.526Z"
  },
  {
    "id": "book-he095",
    "registration_number": "HE095",
    "title": "Moving Millions, The Magic Of The Mundane In Indian Railways",
    "author": "THG BOOKS",
    "isbn": "978-1000000094",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Moving Millions, The Magic Of The Mundane In Indian Railways\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE095.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE095-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE095-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-09T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-22T13:45:35.526Z",
    "updated_at": "2026-06-22T13:45:35.526Z"
  },
  {
    "id": "book-he096",
    "registration_number": "HE096",
    "title": "Diet, Sleep, Exercise, A Comprehensive Guide To A Healthy Lifestyle",
    "author": "THG BOOKS",
    "isbn": "978-1000000095",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Diet, Sleep, Exercise, A Comprehensive Guide To A Healthy Lifestyle\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE096.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE096-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE096-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-08T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-22T19:45:35.526Z",
    "updated_at": "2026-06-22T19:45:35.526Z"
  },
  {
    "id": "book-he097",
    "registration_number": "HE097",
    "title": "Operation Sindoor, The New Normal In An Old Rivalry",
    "author": "THG BOOKS",
    "isbn": "978-1000000096",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Operation Sindoor, The New Normal In An Old Rivalry\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE097.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE097-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE097-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-08T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-23T01:45:35.526Z",
    "updated_at": "2026-06-23T01:45:35.526Z"
  },
  {
    "id": "book-he098",
    "registration_number": "HE098",
    "title": "A World Divided Over West Asia",
    "author": "THG BOOKS",
    "isbn": "978-1000000097",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"A World Divided Over West Asia\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE098.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE098-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE098-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-07T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-23T07:45:35.526Z",
    "updated_at": "2026-06-23T07:45:35.526Z"
  },
  {
    "id": "book-he099",
    "registration_number": "HE099",
    "title": "The Constitution Debate: Power, Rights And Democracy In India",
    "author": "THG BOOKS",
    "isbn": "978-1000000098",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Constitution Debate: Power, Rights And Democracy In India\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE099.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE099-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE099-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-07T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-23T13:45:35.526Z",
    "updated_at": "2026-06-23T13:45:35.526Z"
  },
  {
    "id": "book-he100",
    "registration_number": "HE100",
    "title": "A Life Of Games: A Guide To Sports As a Career In India",
    "author": "THG BOOKS",
    "isbn": "978-1000000099",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"A Life Of Games: A Guide To Sports As a Career In India\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE100.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE100-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE100-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-06T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-23T19:45:35.526Z",
    "updated_at": "2026-06-23T19:45:35.526Z"
  },
  {
    "id": "book-he101",
    "registration_number": "HE101",
    "title": "Health/Disease: Emerging Technologies & Attendant Risks",
    "author": "THG BOOKS",
    "isbn": "978-1000000100",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Health/Disease: Emerging Technologies & Attendant Risks\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE101.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE101-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE101-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-06T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-24T01:45:35.526Z",
    "updated_at": "2026-06-24T01:45:35.526Z"
  },
  {
    "id": "book-he102",
    "registration_number": "HE102",
    "title": "Climate Change And Climate Justice",
    "author": "THG BOOKS",
    "isbn": "978-1000000101",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Climate Change And Climate Justice\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE102.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE102-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE102-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-05T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-24T07:45:35.526Z",
    "updated_at": "2026-06-24T07:45:35.526Z"
  },
  {
    "id": "book-he103",
    "registration_number": "HE103",
    "title": "The Hindu Book of Editorials 2025 VOL -1 (Jan - Mar)",
    "author": "THG BOOKS",
    "isbn": "978-1000000102",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Hindu Book of Editorials 2025 VOL -1 (Jan - Mar)\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE103.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE103-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE103-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-05T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-24T13:45:35.526Z",
    "updated_at": "2026-06-24T13:45:35.526Z"
  },
  {
    "id": "book-he104",
    "registration_number": "HE104",
    "title": "The Hindu Book of Editorials 2025 VOL -2 (Apr - Jun)",
    "author": "THG BOOKS",
    "isbn": "978-1000000103",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Hindu Book of Editorials 2025 VOL -2 (Apr - Jun)\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE104.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE104-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE104-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-06-04T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-24T19:45:35.526Z",
    "updated_at": "2026-06-24T19:45:35.526Z"
  },
  {
    "id": "book-he105",
    "registration_number": "HE105",
    "title": "The Hindu Book of Editorials 2025 VOL -3 (Jul - Sept)",
    "author": "THG BOOKS",
    "isbn": "978-1000000104",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Hindu Book of Editorials 2025 VOL -3 (Jul - Sept)\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE105.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE105-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE105-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-04T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-25T01:45:35.526Z",
    "updated_at": "2026-06-25T01:45:35.526Z"
  },
  {
    "id": "book-he106",
    "registration_number": "HE106",
    "title": "The Hindu Year Book 2026",
    "author": "THG BOOKS",
    "isbn": "978-1000000105",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Hindu Year Book 2026\" written by THG BOOKS. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE106.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE106-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE106-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-03T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-25T07:45:35.526Z",
    "updated_at": "2026-06-25T07:45:35.526Z"
  },
  {
    "id": "book-he107",
    "registration_number": "HE107",
    "title": "The Art of War",
    "author": "Suntzu",
    "isbn": "978-1000000106",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Art of War\" written by Suntzu. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE107.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE107-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE107-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-03T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-25T13:45:35.526Z",
    "updated_at": "2026-06-25T13:45:35.526Z"
  },
  {
    "id": "book-he108",
    "registration_number": "HE108",
    "title": "Rich Dad and Poor Dad",
    "author": "Robert T. Kiyosaki",
    "isbn": "978-1000000107",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Rich Dad and Poor Dad\" authored by Robert T. Kiyosaki. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE108.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE108-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE108-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-06-02T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-25T19:45:35.526Z",
    "updated_at": "2026-06-25T19:45:35.526Z"
  },
  {
    "id": "book-he109",
    "registration_number": "HE109",
    "title": "How To Win Friends And Influence People",
    "author": "Dale Carnegie",
    "isbn": "978-1000000108",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"How To Win Friends And Influence People\" written by Dale Carnegie. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE109.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE109-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE109-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-06-02T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-26T01:45:35.526Z",
    "updated_at": "2026-06-26T01:45:35.526Z"
  },
  {
    "id": "book-he110",
    "registration_number": "HE110",
    "title": "Buried Thoughts",
    "author": "Joseph Annamkutty Jose",
    "isbn": "978-1000000109",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Buried Thoughts\" written by Joseph Annamkutty Jose. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE110.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE110-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE110-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-06-01T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-26T07:45:35.526Z",
    "updated_at": "2026-06-26T07:45:35.526Z"
  },
  {
    "id": "book-he111",
    "registration_number": "HE111",
    "title": "Zero to One",
    "author": "Peter Thiel",
    "isbn": "978-1000000110",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Zero to One\" written by Peter Thiel. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE111.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE111-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE111-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-06-01T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-26T13:45:35.526Z",
    "updated_at": "2026-06-26T13:45:35.526Z"
  },
  {
    "id": "book-he112",
    "registration_number": "HE112",
    "title": "Atomic Habits",
    "author": "James Clear",
    "isbn": "978-1000000111",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Atomic Habits\" written by James Clear. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE112.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE112-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE112-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-31T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-26T19:45:35.526Z",
    "updated_at": "2026-06-26T19:45:35.526Z"
  },
  {
    "id": "book-he113",
    "registration_number": "HE113",
    "title": "And The Mountains Echoed",
    "author": "Khaled Hosseini",
    "isbn": "978-1000000112",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"And The Mountains Echoed\" authored by Khaled Hosseini. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE113.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE113-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-06T13:45:35.526Z"
      },
      {
        "id": "rev-HE113-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-31T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-27T01:45:35.526Z",
    "updated_at": "2026-06-27T01:45:35.526Z"
  },
  {
    "id": "book-he114",
    "registration_number": "HE114",
    "title": "A Thousand Splendid Suns",
    "author": "Khaled Hosseini",
    "isbn": "978-1000000113",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"A Thousand Splendid Suns\" authored by Khaled Hosseini. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE114.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE114-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-05T13:45:35.526Z"
      },
      {
        "id": "rev-HE114-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-05-30T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-27T07:45:35.526Z",
    "updated_at": "2026-06-27T07:45:35.526Z"
  },
  {
    "id": "book-he115",
    "registration_number": "HE115",
    "title": "As Good As Dead",
    "author": "Holly Jackson",
    "isbn": "978-1000000114",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"As Good As Dead\" authored by Holly Jackson. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE115.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE115-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-04T13:45:35.526Z"
      },
      {
        "id": "rev-HE115-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-30T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-27T13:45:35.526Z",
    "updated_at": "2026-06-27T13:45:35.526Z"
  },
  {
    "id": "book-he116",
    "registration_number": "HE116",
    "title": "One Of Us Is Lying",
    "author": "Karen M. McManus",
    "isbn": "978-1000000115",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"One Of Us Is Lying\" authored by Karen M. McManus. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE116.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE116-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-03T13:45:35.526Z"
      },
      {
        "id": "rev-HE116-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-05-29T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-27T19:45:35.526Z",
    "updated_at": "2026-06-27T19:45:35.526Z"
  },
  {
    "id": "book-he117",
    "registration_number": "HE117",
    "title": "A Little Life",
    "author": "Hanya Yanagihara.",
    "isbn": "978-1000000116",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"A Little Life\" authored by Hanya Yanagihara.. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE117.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE117-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-02T13:45:35.526Z"
      },
      {
        "id": "rev-HE117-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-29T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-28T01:45:35.526Z",
    "updated_at": "2026-06-28T01:45:35.526Z"
  },
  {
    "id": "book-he118",
    "registration_number": "HE118",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "isbn": "978-1000000117",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Alchemist\" authored by Paulo Coelho. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE118.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE118-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-01T13:45:35.526Z"
      },
      {
        "id": "rev-HE118-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-05-28T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-28T07:45:35.526Z",
    "updated_at": "2026-06-28T07:45:35.526Z"
  },
  {
    "id": "book-he119",
    "registration_number": "HE119",
    "title": "The Girl On The Train",
    "author": "Paula Hawkins",
    "isbn": "978-1000000118",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Girl On The Train\" authored by Paula Hawkins. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE119.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE119-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-03-31T13:45:35.526Z"
      },
      {
        "id": "rev-HE119-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-28T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-28T13:45:35.526Z",
    "updated_at": "2026-06-28T13:45:35.526Z"
  },
  {
    "id": "book-he120",
    "registration_number": "HE120",
    "title": "The Mountain Is You",
    "author": "Brianna Wiest",
    "isbn": "978-1000000119",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Mountain Is You\" written by Brianna Wiest. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE120.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE120-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-03-30T13:45:35.526Z"
      },
      {
        "id": "rev-HE120-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-27T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-28T19:45:35.526Z",
    "updated_at": "2026-06-28T19:45:35.526Z"
  },
  {
    "id": "book-he121",
    "registration_number": "HE121",
    "title": "Kill Joy",
    "author": "Holly Jackson",
    "isbn": "978-1000000120",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Kill Joy\" authored by Holly Jackson. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE121.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE121-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-29T13:45:35.526Z"
      },
      {
        "id": "rev-HE121-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-27T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-29T01:45:35.526Z",
    "updated_at": "2026-06-29T01:45:35.526Z"
  },
  {
    "id": "book-he122",
    "registration_number": "HE122",
    "title": "One Time One Life",
    "author": "Salam Kolikkal",
    "isbn": "978-1000000121",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"One Time One Life\" written by Salam Kolikkal. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE122.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE122-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-28T13:45:35.526Z"
      },
      {
        "id": "rev-HE122-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-26T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-29T07:45:35.526Z",
    "updated_at": "2026-06-29T07:45:35.526Z"
  },
  {
    "id": "book-he123",
    "registration_number": "HE123",
    "title": "The River of Adventure",
    "author": "Enid Blyton",
    "isbn": "978-1000000122",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The River of Adventure\" authored by Enid Blyton. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE123.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE123-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-03-27T13:45:35.526Z"
      },
      {
        "id": "rev-HE123-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-26T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-29T13:45:35.526Z",
    "updated_at": "2026-06-29T13:45:35.526Z"
  },
  {
    "id": "book-he124",
    "registration_number": "HE124",
    "title": "The Ship Of Adventure",
    "author": "Enid Blyton",
    "isbn": "978-1000000123",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Ship Of Adventure\" authored by Enid Blyton. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE124.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE124-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-03-26T13:45:35.526Z"
      },
      {
        "id": "rev-HE124-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-05-25T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-29T19:45:35.526Z",
    "updated_at": "2026-06-29T19:45:35.526Z"
  },
  {
    "id": "book-he125",
    "registration_number": "HE125",
    "title": "The Mountain Of Adventure",
    "author": "Enid Blyton",
    "isbn": "978-1000000124",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Mountain Of Adventure\" authored by Enid Blyton. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE125.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE125-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-25T13:45:35.526Z"
      },
      {
        "id": "rev-HE125-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-25T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-30T01:45:35.526Z",
    "updated_at": "2026-06-30T01:45:35.526Z"
  },
  {
    "id": "book-he126",
    "registration_number": "HE126",
    "title": "Anatomy Of a Genius",
    "author": "Domagoj Kostanjsak",
    "isbn": "978-1000000125",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Anatomy Of a Genius\" written by Domagoj Kostanjsak. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE126.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE126-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE126-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-24T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-30T07:45:35.526Z",
    "updated_at": "2026-06-30T07:45:35.526Z"
  },
  {
    "id": "book-he127",
    "registration_number": "HE127",
    "title": "Speaking Of History",
    "author": "Romila Thapar & Namit Arora",
    "isbn": "978-1000000126",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Speaking Of History\" written by Romila Thapar & Namit Arora. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE127.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE127-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-03-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE127-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-24T01:45:35.526Z"
      }
    ],
    "created_at": "2026-06-30T13:45:35.526Z",
    "updated_at": "2026-06-30T13:45:35.526Z"
  },
  {
    "id": "book-he128",
    "registration_number": "HE128",
    "title": "Elon Musk",
    "author": "Ashlee Vance",
    "isbn": "978-1000000127",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Elon Musk\" written by Ashlee Vance. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE128.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE128-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-03-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE128-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-23T13:45:35.526Z"
      }
    ],
    "created_at": "2026-06-30T19:45:35.526Z",
    "updated_at": "2026-06-30T19:45:35.526Z"
  },
  {
    "id": "book-he129",
    "registration_number": "HE129",
    "title": "As Long As The Lemon Trees Grow",
    "author": "Zoulfa Katouh",
    "isbn": "978-1000000128",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"As Long As The Lemon Trees Grow\" authored by Zoulfa Katouh. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE129.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE129-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE129-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-23T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-01T01:45:35.526Z",
    "updated_at": "2026-07-01T01:45:35.526Z"
  },
  {
    "id": "book-he130",
    "registration_number": "HE130",
    "title": "The Will To Meaning",
    "author": "Viktor E. Frankl",
    "isbn": "978-1000000129",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Will To Meaning\" written by Viktor E. Frankl. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE130.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE130-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE130-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-22T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-01T07:45:35.526Z",
    "updated_at": "2026-07-01T07:45:35.526Z"
  },
  {
    "id": "book-he131",
    "registration_number": "HE131",
    "title": "Wicked By Design",
    "author": "Katy Moran",
    "isbn": "978-1000000130",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Wicked By Design\" authored by Katy Moran. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE131.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE131-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-03-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE131-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-22T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-01T13:45:35.526Z",
    "updated_at": "2026-07-01T13:45:35.526Z"
  },
  {
    "id": "book-he132",
    "registration_number": "HE132",
    "title": "Delulu Is Not The Solulu",
    "author": "Natashja Rathore",
    "isbn": "978-1000000131",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Delulu Is Not The Solulu\" written by Natashja Rathore. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE132.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE132-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-03-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE132-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-21T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-01T19:45:35.526Z",
    "updated_at": "2026-07-01T19:45:35.526Z"
  },
  {
    "id": "book-he133",
    "registration_number": "HE133",
    "title": "Taiwan Travelogue",
    "author": "Yang Shuang-zi",
    "isbn": "978-1000000132",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Taiwan Travelogue\" authored by Yang Shuang-zi. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE133.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE133-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE133-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-21T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-02T01:45:35.526Z",
    "updated_at": "2026-07-02T01:45:35.526Z"
  },
  {
    "id": "book-he134",
    "registration_number": "HE134",
    "title": "Mother Mary Comes To Me",
    "author": "Arundhati Roy",
    "isbn": "978-1000000133",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Mother Mary Comes To Me\" written by Arundhati Roy. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE134.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE134-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE134-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-20T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-02T07:45:35.526Z",
    "updated_at": "2026-07-02T07:45:35.526Z"
  },
  {
    "id": "book-he135",
    "registration_number": "HE135",
    "title": "Invincible Arjuna",
    "author": "Debashis Chatterjee",
    "isbn": "978-1000000134",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Invincible Arjuna\" written by Debashis Chatterjee. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE135.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE135-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-03-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE135-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-20T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-02T13:45:35.526Z",
    "updated_at": "2026-07-02T13:45:35.526Z"
  },
  {
    "id": "book-he136",
    "registration_number": "HE136",
    "title": "The IAS Alchemist",
    "author": "S. Harikishore",
    "isbn": "978-1000000135",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The IAS Alchemist\" written by S. Harikishore. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE136.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE136-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-03-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE136-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-19T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-02T19:45:35.526Z",
    "updated_at": "2026-07-02T19:45:35.526Z"
  },
  {
    "id": "book-he137",
    "registration_number": "HE137",
    "title": "The Forty Rules Of Love",
    "author": "Elif Shafak",
    "isbn": "978-1000000136",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Forty Rules Of Love\" authored by Elif Shafak. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE137.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE137-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE137-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-19T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-03T01:45:35.526Z",
    "updated_at": "2026-07-03T01:45:35.526Z"
  },
  {
    "id": "book-he138",
    "registration_number": "HE138",
    "title": "Open Intelligence",
    "author": "Saikat Majumdar",
    "isbn": "978-1000000137",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Open Intelligence\" written by Saikat Majumdar. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE138.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE138-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE138-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-18T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-03T07:45:35.526Z",
    "updated_at": "2026-07-03T07:45:35.526Z"
  },
  {
    "id": "book-he139",
    "registration_number": "HE139",
    "title": "Educated",
    "author": "Tara Westover",
    "isbn": "978-1000000138",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Educated\" written by Tara Westover. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE139.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE139-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-03-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE139-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-18T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-03T13:45:35.526Z",
    "updated_at": "2026-07-03T13:45:35.526Z"
  },
  {
    "id": "book-he140",
    "registration_number": "HE140",
    "title": "The Midnight Train",
    "author": "Matt Haig",
    "isbn": "978-1000000139",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Midnight Train\" authored by Matt Haig. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE140.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE140-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-03-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE140-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-05-17T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-03T19:45:35.526Z",
    "updated_at": "2026-07-03T19:45:35.526Z"
  },
  {
    "id": "book-he141",
    "registration_number": "HE141",
    "title": "The Midnight Library",
    "author": "Matt Haig",
    "isbn": "978-1000000140",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Midnight Library\" authored by Matt Haig. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE141.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE141-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE141-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-17T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-04T01:45:35.526Z",
    "updated_at": "2026-07-04T01:45:35.526Z"
  },
  {
    "id": "book-he142",
    "registration_number": "HE142",
    "title": "Winning People Without Losing Yourself",
    "author": "Ankur Warikoo",
    "isbn": "978-1000000141",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Winning People Without Losing Yourself\" written by Ankur Warikoo. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE142.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE142-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE142-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-16T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-04T07:45:35.526Z",
    "updated_at": "2026-07-04T07:45:35.526Z"
  },
  {
    "id": "book-he143",
    "registration_number": "HE143",
    "title": "The Supreme Gift",
    "author": "Paulo Coelho",
    "isbn": "978-1000000142",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Supreme Gift\" written by Paulo Coelho. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE143.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE143-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-03-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE143-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-16T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-04T13:45:35.526Z",
    "updated_at": "2026-07-04T13:45:35.526Z"
  },
  {
    "id": "book-he144",
    "registration_number": "HE144",
    "title": "India After Gandhi",
    "author": "Ramachandra Guha",
    "isbn": "978-1000000143",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"India After Gandhi\" written by Ramachandra Guha. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE144.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE144-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-03-06T13:45:35.526Z"
      },
      {
        "id": "rev-HE144-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-15T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-04T19:45:35.526Z",
    "updated_at": "2026-07-04T19:45:35.526Z"
  },
  {
    "id": "book-he145",
    "registration_number": "HE145",
    "title": "The Psychology Of Leadership",
    "author": "Sebastien Page",
    "isbn": "978-1000000144",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Psychology Of Leadership\" written by Sebastien Page. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE145.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE145-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-03-05T13:45:35.526Z"
      },
      {
        "id": "rev-HE145-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-15T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-05T01:45:35.526Z",
    "updated_at": "2026-07-05T01:45:35.526Z"
  },
  {
    "id": "book-he146",
    "registration_number": "HE146",
    "title": "Playing It My Way",
    "author": "Sachin Tendulkar",
    "isbn": "978-1000000145",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Playing It My Way\" written by Sachin Tendulkar. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE146.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE146-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-03-04T13:45:35.526Z"
      },
      {
        "id": "rev-HE146-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-14T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-05T07:45:35.526Z",
    "updated_at": "2026-07-05T07:45:35.526Z"
  },
  {
    "id": "book-he147",
    "registration_number": "HE147",
    "title": "A Fire Over Mount Everest",
    "author": "Siddharth Kak",
    "isbn": "978-1000000146",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"A Fire Over Mount Everest\" written by Siddharth Kak. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE147.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE147-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-03-03T13:45:35.526Z"
      },
      {
        "id": "rev-HE147-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-14T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-05T13:45:35.526Z",
    "updated_at": "2026-07-05T13:45:35.526Z"
  },
  {
    "id": "book-he148",
    "registration_number": "HE148",
    "title": "The Diary Of A CEO",
    "author": "Steven Bartlett",
    "isbn": "978-1000000147",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Diary Of A CEO\" written by Steven Bartlett. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE148.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE148-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-03-02T13:45:35.526Z"
      },
      {
        "id": "rev-HE148-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-13T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-05T19:45:35.526Z",
    "updated_at": "2026-07-05T19:45:35.526Z"
  },
  {
    "id": "book-he149",
    "registration_number": "HE149",
    "title": "Seagull",
    "author": "Jonathan Livingston",
    "isbn": "978-1000000148",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Seagull\" authored by Jonathan Livingston. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE149.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE149-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-01T13:45:35.526Z"
      },
      {
        "id": "rev-HE149-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-13T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-06T01:45:35.526Z",
    "updated_at": "2026-07-06T01:45:35.526Z"
  },
  {
    "id": "book-he150",
    "registration_number": "HE150",
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "isbn": "978-1000000149",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Silent Patient\" authored by Alex Michaelides. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE150.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE150-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-02-28T13:45:35.526Z"
      },
      {
        "id": "rev-HE150-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-05-12T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-06T07:45:35.526Z",
    "updated_at": "2026-07-06T07:45:35.526Z"
  },
  {
    "id": "book-he151",
    "registration_number": "HE151",
    "title": "Ikigai",
    "author": "Hector Garcia and Francesc Miralles",
    "isbn": "978-1000000150",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Ikigai\" written by Hector Garcia and Francesc Miralles. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE151.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE151-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-02-27T13:45:35.526Z"
      },
      {
        "id": "rev-HE151-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-12T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-06T13:45:35.526Z",
    "updated_at": "2026-07-06T13:45:35.526Z"
  },
  {
    "id": "book-he152",
    "registration_number": "HE152",
    "title": "India That Is Bharat",
    "author": "J. Sai Deepak",
    "isbn": "978-1000000151",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"India That Is Bharat\" written by J. Sai Deepak. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE152.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE152-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-02-26T13:45:35.526Z"
      },
      {
        "id": "rev-HE152-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-11T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-06T19:45:35.526Z",
    "updated_at": "2026-07-06T19:45:35.526Z"
  },
  {
    "id": "book-he153",
    "registration_number": "HE153",
    "title": "Coffee King",
    "author": "Rukmini Rao & Prosenjit Datta",
    "isbn": "978-1000000152",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Coffee King\" written by Rukmini Rao & Prosenjit Datta. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE153.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE153-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-02-25T13:45:35.526Z"
      },
      {
        "id": "rev-HE153-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-11T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-07T01:45:35.526Z",
    "updated_at": "2026-07-07T01:45:35.526Z"
  },
  {
    "id": "book-he154",
    "registration_number": "HE154",
    "title": "I Am What I Am",
    "author": "Sunitha Krishnan",
    "isbn": "978-1000000153",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"I Am What I Am\" written by Sunitha Krishnan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE154.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE154-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-02-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE154-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-10T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-07T07:45:35.526Z",
    "updated_at": "2026-07-07T07:45:35.526Z"
  },
  {
    "id": "book-he155",
    "registration_number": "HE155",
    "title": "The Inspired Leader",
    "author": "Anil Sachdev",
    "isbn": "978-1000000154",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Inspired Leader\" written by Anil Sachdev. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE155.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE155-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-02-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE155-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-10T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-07T13:45:35.526Z",
    "updated_at": "2026-07-07T13:45:35.526Z"
  },
  {
    "id": "book-he156",
    "registration_number": "HE156",
    "title": "The Shortest History Of India",
    "author": "John Zubrzycki",
    "isbn": "978-1000000155",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Shortest History Of India\" written by John Zubrzycki. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE156.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE156-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-02-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE156-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-09T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-07T19:45:35.526Z",
    "updated_at": "2026-07-07T19:45:35.526Z"
  },
  {
    "id": "book-he157",
    "registration_number": "HE157",
    "title": "Booster Dose",
    "author": "Muhsina Bahira Binth Noushad",
    "isbn": "978-1000000156",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Booster Dose\" written by Muhsina Bahira Binth Noushad. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE157.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE157-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-02-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE157-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-09T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-08T01:45:35.526Z",
    "updated_at": "2026-07-08T01:45:35.526Z"
  },
  {
    "id": "book-he158",
    "registration_number": "HE158",
    "title": "Final Quest",
    "author": "John Louis",
    "isbn": "978-1000000157",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Final Quest\" authored by John Louis. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE158.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE158-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-02-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE158-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-05-08T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-08T07:45:35.526Z",
    "updated_at": "2026-07-08T07:45:35.526Z"
  },
  {
    "id": "book-he159",
    "registration_number": "HE159",
    "title": "Ramanan",
    "author": "Changampuzha Krishna Pilla",
    "isbn": "978-1000000158",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Ramanan\" authored by Changampuzha Krishna Pilla. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE159.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE159-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-02-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE159-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-08T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-08T13:45:35.526Z",
    "updated_at": "2026-07-08T13:45:35.526Z"
  },
  {
    "id": "book-he160",
    "registration_number": "HE160",
    "title": "Little World Of Wonder",
    "author": "Hana Bovikanam",
    "isbn": "978-1000000159",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Little World Of Wonder\" authored by Hana Bovikanam. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE160.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE160-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-02-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE160-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-05-07T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-08T19:45:35.526Z",
    "updated_at": "2026-07-08T19:45:35.526Z"
  },
  {
    "id": "book-he161",
    "registration_number": "HE161",
    "title": "Healing",
    "author": "Jafer A Palaki & Elham M.",
    "isbn": "978-1000000160",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Healing\" written by Jafer A Palaki & Elham M.. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE161.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE161-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-02-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE161-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-07T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-09T01:45:35.526Z",
    "updated_at": "2026-07-09T01:45:35.526Z"
  },
  {
    "id": "book-he162",
    "registration_number": "HE162",
    "title": "33 Treasures From The Prophet Stories",
    "author": "Muhammed Sahal Nurani",
    "isbn": "978-1000000161",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"33 Treasures From The Prophet Stories\" written by Muhammed Sahal Nurani. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE162.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE162-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-02-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE162-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-06T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-09T07:45:35.526Z",
    "updated_at": "2026-07-09T07:45:35.526Z"
  },
  {
    "id": "book-he163",
    "registration_number": "HE163",
    "title": "The Journey Of Skypuff",
    "author": "Majeed Ariyallur",
    "isbn": "978-1000000162",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Journey Of Skypuff\" authored by Majeed Ariyallur. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE163.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE163-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-02-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE163-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-05-06T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-09T13:45:35.526Z",
    "updated_at": "2026-07-09T13:45:35.526Z"
  },
  {
    "id": "book-he164",
    "registration_number": "HE164",
    "title": "Khalifa Abubakr (R)",
    "author": "M. Midlaj",
    "isbn": "978-1000000163",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Khalifa Abubakr (R)\" written by M. Midlaj. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE164.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE164-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-02-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE164-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-05T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-09T19:45:35.526Z",
    "updated_at": "2026-07-09T19:45:35.526Z"
  },
  {
    "id": "book-he165",
    "registration_number": "HE165",
    "title": "Khalifa Umar (R)",
    "author": "M. Midlaj",
    "isbn": "978-1000000164",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Khalifa Umar (R)\" written by M. Midlaj. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE165.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE165-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-02-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE165-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-05T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-10T01:45:35.526Z",
    "updated_at": "2026-07-10T01:45:35.526Z"
  },
  {
    "id": "book-he166",
    "registration_number": "HE166",
    "title": "Khalifa Uthman (R)",
    "author": "M. Midlaj",
    "isbn": "978-1000000165",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Khalifa Uthman (R)\" written by M. Midlaj. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE166.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE166-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-02-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE166-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-04T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-10T07:45:35.526Z",
    "updated_at": "2026-07-10T07:45:35.526Z"
  },
  {
    "id": "book-he167",
    "registration_number": "HE167",
    "title": "Khalifa Ali (R)",
    "author": "M. Midlaj",
    "isbn": "978-1000000166",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Khalifa Ali (R)\" written by M. Midlaj. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE167.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE167-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-02-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE167-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-04T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-10T13:45:35.526Z",
    "updated_at": "2026-07-10T13:45:35.526Z"
  },
  {
    "id": "book-he168",
    "registration_number": "HE168",
    "title": "The Sulthan Of Ajmer",
    "author": "Fathima Rifa",
    "isbn": "978-1000000167",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Sulthan Of Ajmer\" written by Fathima Rifa. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE168.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE168-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-02-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE168-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-03T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-10T19:45:35.526Z",
    "updated_at": "2026-07-10T19:45:35.526Z"
  },
  {
    "id": "book-he169",
    "registration_number": "HE169",
    "title": "I Made It Happen",
    "author": "Dr. Devidas Taru",
    "isbn": "978-1000000168",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"I Made It Happen\" authored by Dr. Devidas Taru. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE169.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE169-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-02-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE169-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-05-03T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-11T01:45:35.526Z",
    "updated_at": "2026-07-11T01:45:35.526Z"
  },
  {
    "id": "book-he170",
    "registration_number": "HE170",
    "title": "Prophet Muhammed Vol 1",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000169",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 1\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE170.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE170-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-02-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE170-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-05-02T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-11T07:45:35.526Z",
    "updated_at": "2026-07-11T07:45:35.526Z"
  },
  {
    "id": "book-he171",
    "registration_number": "HE171",
    "title": "Prophet Muhammed Vol 2",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000170",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 2\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE171.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE171-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-02-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE171-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-05-02T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-11T13:45:35.526Z",
    "updated_at": "2026-07-11T13:45:35.526Z"
  },
  {
    "id": "book-he172",
    "registration_number": "HE172",
    "title": "Prophet Muhammed Vol 3",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000171",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 3\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE172.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE172-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-02-06T13:45:35.526Z"
      },
      {
        "id": "rev-HE172-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-05-01T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-11T19:45:35.526Z",
    "updated_at": "2026-07-11T19:45:35.526Z"
  },
  {
    "id": "book-he173",
    "registration_number": "HE173",
    "title": "Prophet Muhammed Vol 4",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000172",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 4\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE173.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE173-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-02-05T13:45:35.526Z"
      },
      {
        "id": "rev-HE173-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-05-01T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-12T01:45:35.526Z",
    "updated_at": "2026-07-12T01:45:35.526Z"
  },
  {
    "id": "book-he174",
    "registration_number": "HE174",
    "title": "Prophet Muhammed Vol 5",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000173",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 5\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE174.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE174-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-02-04T13:45:35.526Z"
      },
      {
        "id": "rev-HE174-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-30T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-12T07:45:35.526Z",
    "updated_at": "2026-07-12T07:45:35.526Z"
  },
  {
    "id": "book-he175",
    "registration_number": "HE175",
    "title": "Prophet Muhammed Vol 6",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000174",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 6\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE175.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE175-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-02-03T13:45:35.526Z"
      },
      {
        "id": "rev-HE175-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-30T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-12T13:45:35.526Z",
    "updated_at": "2026-07-12T13:45:35.526Z"
  },
  {
    "id": "book-he176",
    "registration_number": "HE176",
    "title": "Prophet Muhammed Vol 7",
    "author": "Dr.Muhammed Farooq Naeemi",
    "isbn": "978-1000000175",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Prophet Muhammed Vol 7\" written by Dr.Muhammed Farooq Naeemi. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE176.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE176-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-02-02T13:45:35.526Z"
      },
      {
        "id": "rev-HE176-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-29T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-12T19:45:35.526Z",
    "updated_at": "2026-07-12T19:45:35.526Z"
  },
  {
    "id": "book-he177",
    "registration_number": "HE177",
    "title": "My Gym Teacher is an Alien Overlord",
    "author": "David Solomons",
    "isbn": "978-1000000176",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"My Gym Teacher is an Alien Overlord\" authored by David Solomons. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE177.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE177-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-02-01T13:45:35.526Z"
      },
      {
        "id": "rev-HE177-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-29T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-13T01:45:35.526Z",
    "updated_at": "2026-07-13T01:45:35.526Z"
  },
  {
    "id": "book-he178",
    "registration_number": "HE178",
    "title": "My Evil Twin is a Supervillain",
    "author": "David Solomons",
    "isbn": "978-1000000177",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"My Evil Twin is a Supervillain\" authored by David Solomons. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE178.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE178-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-01-31T13:45:35.526Z"
      },
      {
        "id": "rev-HE178-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-28T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-13T07:45:35.526Z",
    "updated_at": "2026-07-13T07:45:35.526Z"
  },
  {
    "id": "book-he179",
    "registration_number": "HE179",
    "title": "Robotics And Other Super Cool Technology",
    "author": "Shalini Satish & Raam Baranidharan",
    "isbn": "978-1000000178",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Robotics And Other Super Cool Technology\" written by Shalini Satish & Raam Baranidharan. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE179.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE179-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-01-30T13:45:35.526Z"
      },
      {
        "id": "rev-HE179-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-28T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-13T13:45:35.526Z",
    "updated_at": "2026-07-13T13:45:35.526Z"
  },
  {
    "id": "book-he180",
    "registration_number": "HE180",
    "title": "Street Kid",
    "author": "Judy westwater",
    "isbn": "978-1000000179",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Street Kid\" authored by Judy westwater. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE180.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE180-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-01-29T13:45:35.526Z"
      },
      {
        "id": "rev-HE180-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-27T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-13T19:45:35.526Z",
    "updated_at": "2026-07-13T19:45:35.526Z"
  },
  {
    "id": "book-he181",
    "registration_number": "HE181",
    "title": "Mahatma On The Pitch",
    "author": "Kousik Bandyopadhyay",
    "isbn": "978-1000000180",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Mahatma On The Pitch\" written by Kousik Bandyopadhyay. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE181.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE181-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-01-28T13:45:35.526Z"
      },
      {
        "id": "rev-HE181-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-27T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-14T01:45:35.526Z",
    "updated_at": "2026-07-14T01:45:35.526Z"
  },
  {
    "id": "book-he182",
    "registration_number": "HE182",
    "title": "The Year I Met You",
    "author": "Cecelia Ahern",
    "isbn": "978-1000000181",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Year I Met You\" authored by Cecelia Ahern. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE182.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE182-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-01-27T13:45:35.526Z"
      },
      {
        "id": "rev-HE182-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-26T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-14T07:45:35.526Z",
    "updated_at": "2026-07-14T07:45:35.526Z"
  },
  {
    "id": "book-he183",
    "registration_number": "HE183",
    "title": "The Gunas (Mindsets)",
    "author": "Prof. PR Mukund",
    "isbn": "978-1000000182",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Gunas (Mindsets)\" written by Prof. PR Mukund. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE183.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE183-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-01-26T13:45:35.526Z"
      },
      {
        "id": "rev-HE183-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-26T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-14T13:45:35.526Z",
    "updated_at": "2026-07-14T13:45:35.526Z"
  },
  {
    "id": "book-he184",
    "registration_number": "HE184",
    "title": "Wilt In Nowhere",
    "author": "Tom Sharpe",
    "isbn": "978-1000000183",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Wilt In Nowhere\" authored by Tom Sharpe. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE184.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE184-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-01-25T13:45:35.526Z"
      },
      {
        "id": "rev-HE184-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-25T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-14T19:45:35.526Z",
    "updated_at": "2026-07-14T19:45:35.526Z"
  },
  {
    "id": "book-he185",
    "registration_number": "HE185",
    "title": "Flamingo Boy",
    "author": "Michael Morpurgo",
    "isbn": "978-1000000184",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Flamingo Boy\" authored by Michael Morpurgo. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE185.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE185-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-01-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE185-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-25T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-15T01:45:35.526Z",
    "updated_at": "2026-07-15T01:45:35.526Z"
  },
  {
    "id": "book-he186",
    "registration_number": "HE186",
    "title": "Michael Morpurgo: War Child To War Horse",
    "author": "Maggie Fergusson",
    "isbn": "978-1000000185",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Michael Morpurgo: War Child To War Horse\" written by Maggie Fergusson. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE186.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE186-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-01-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE186-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-24T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-15T07:45:35.526Z",
    "updated_at": "2026-07-15T07:45:35.526Z"
  },
  {
    "id": "book-he187",
    "registration_number": "HE187",
    "title": "No - Flinch Lynch",
    "author": "Jonathan Kebbe",
    "isbn": "978-1000000186",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"No - Flinch Lynch\" authored by Jonathan Kebbe. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE187.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE187-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-01-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE187-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-24T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-15T13:45:35.526Z",
    "updated_at": "2026-07-15T13:45:35.526Z"
  },
  {
    "id": "book-he188",
    "registration_number": "HE188",
    "title": "The Great Trial Warriors Of Bharat",
    "author": "Tuhin A Sinha With Ambalika",
    "isbn": "978-1000000187",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Great Trial Warriors Of Bharat\" written by Tuhin A Sinha With Ambalika. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE188.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE188-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-01-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE188-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-23T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-15T19:45:35.526Z",
    "updated_at": "2026-07-15T19:45:35.526Z"
  },
  {
    "id": "book-he189",
    "registration_number": "HE189",
    "title": "The Lords Of Wankhede",
    "author": "WV Raman & R Kaushik",
    "isbn": "978-1000000188",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Lords Of Wankhede\" written by WV Raman & R Kaushik. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE189.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE189-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-01-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE189-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-23T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-16T01:45:35.526Z",
    "updated_at": "2026-07-16T01:45:35.526Z"
  },
  {
    "id": "book-he190",
    "registration_number": "HE190",
    "title": "Barabanki: The Professor,The Pandit And The policeman",
    "author": "Anuj Tiwari",
    "isbn": "978-1000000189",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Barabanki: The Professor,The Pandit And The policeman\" authored by Anuj Tiwari. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE190.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE190-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-01-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE190-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-22T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-16T07:45:35.526Z",
    "updated_at": "2026-07-16T07:45:35.526Z"
  },
  {
    "id": "book-he191",
    "registration_number": "HE191",
    "title": "Terror Kid",
    "author": "Benjamin Zephaniah",
    "isbn": "978-1000000190",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Terror Kid\" authored by Benjamin Zephaniah. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE191.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE191-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-01-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE191-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-22T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-16T13:45:35.526Z",
    "updated_at": "2026-07-16T13:45:35.526Z"
  },
  {
    "id": "book-he192",
    "registration_number": "HE192",
    "title": "Premier Amour First Love",
    "author": "Abhay",
    "isbn": "978-1000000191",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Premier Amour First Love\" authored by Abhay. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE192.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE192-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-01-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE192-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-21T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-16T19:45:35.526Z",
    "updated_at": "2026-07-16T19:45:35.526Z"
  },
  {
    "id": "book-he193",
    "registration_number": "HE193",
    "title": "Phrase Fact Finder",
    "author": "Terry O'Brien",
    "isbn": "978-1000000192",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Phrase Fact Finder\" written by Terry O'Brien. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE193.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE193-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-01-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE193-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-21T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-17T01:45:35.526Z",
    "updated_at": "2026-07-17T01:45:35.526Z"
  },
  {
    "id": "book-he194",
    "registration_number": "HE194",
    "title": "Fizzlebert Stump And The Beard Boy",
    "author": "A. F. Harrold",
    "isbn": "978-1000000193",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Fizzlebert Stump And The Beard Boy\" authored by A. F. Harrold. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE194.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE194-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-01-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE194-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-20T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-17T07:45:35.526Z",
    "updated_at": "2026-07-17T07:45:35.526Z"
  },
  {
    "id": "book-he195",
    "registration_number": "HE195",
    "title": "A Resurgent Northeast",
    "author": "Ashish Kundra",
    "isbn": "978-1000000194",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"A Resurgent Northeast\" written by Ashish Kundra. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE195.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE195-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-01-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE195-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-20T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-17T13:45:35.526Z",
    "updated_at": "2026-07-17T13:45:35.526Z"
  },
  {
    "id": "book-he196",
    "registration_number": "HE196",
    "title": "Restless Chronicles Of A Policeman",
    "author": "V.R. Sampath",
    "isbn": "978-1000000195",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Restless Chronicles Of A Policeman\" written by V.R. Sampath. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE196.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE196-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-01-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE196-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-19T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-17T19:45:35.526Z",
    "updated_at": "2026-07-17T19:45:35.526Z"
  },
  {
    "id": "book-he197",
    "registration_number": "HE197",
    "title": "Our India: Reflections On A Nation Betwixt And Between",
    "author": "Captain G.R. Gopinath",
    "isbn": "978-1000000196",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Our India: Reflections On A Nation Betwixt And Between\" written by Captain G.R. Gopinath. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE197.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE197-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-01-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE197-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-19T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-18T01:45:35.526Z",
    "updated_at": "2026-07-18T01:45:35.526Z"
  },
  {
    "id": "book-he198",
    "registration_number": "HE198",
    "title": "Well Played: From Here To Eternity",
    "author": "Dr. Rajeev Bagarhatta",
    "isbn": "978-1000000197",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Well Played: From Here To Eternity\" written by Dr. Rajeev Bagarhatta. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE198.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE198-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-01-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE198-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-18T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-18T07:45:35.526Z",
    "updated_at": "2026-07-18T07:45:35.526Z"
  },
  {
    "id": "book-he199",
    "registration_number": "HE199",
    "title": "The Nation's Homeopath",
    "author": "Dr. Mukesh Batra",
    "isbn": "978-1000000198",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Nation's Homeopath\" written by Dr. Mukesh Batra. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE199.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE199-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-01-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE199-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-18T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-18T13:45:35.526Z",
    "updated_at": "2026-07-18T13:45:35.526Z"
  },
  {
    "id": "book-he200",
    "registration_number": "HE200",
    "title": "Glided Cage",
    "author": "Sandeep Bamzai",
    "isbn": "978-1000000199",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Glided Cage\" written by Sandeep Bamzai. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE200.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE200-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-01-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE200-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-04-17T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-18T19:45:35.526Z",
    "updated_at": "2026-07-18T19:45:35.526Z"
  },
  {
    "id": "book-he201",
    "registration_number": "HE201",
    "title": "Everything Beautiful",
    "author": "Simmone Howell",
    "isbn": "978-1000000200",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Everything Beautiful\" authored by Simmone Howell. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE201.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE201-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-01-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE201-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-17T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-19T01:45:35.526Z",
    "updated_at": "2026-07-19T01:45:35.526Z"
  },
  {
    "id": "book-he202",
    "registration_number": "HE202",
    "title": "How To Talk : Siblings Without Rivalry",
    "author": "Adele Faber & Elaine Mazlish",
    "isbn": "978-1000000201",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"How To Talk : Siblings Without Rivalry\" written by Adele Faber & Elaine Mazlish. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE202.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE202-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2026-01-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE202-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-16T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-19T07:45:35.526Z",
    "updated_at": "2026-07-19T07:45:35.526Z"
  },
  {
    "id": "book-he203",
    "registration_number": "HE203",
    "title": "Brand Identity Breakthrough",
    "author": "Gregory V. Diehl",
    "isbn": "978-1000000202",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Brand Identity Breakthrough\" written by Gregory V. Diehl. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE203.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE203-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-01-06T13:45:35.526Z"
      },
      {
        "id": "rev-HE203-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-16T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-19T13:45:35.526Z",
    "updated_at": "2026-07-19T13:45:35.526Z"
  },
  {
    "id": "book-he204",
    "registration_number": "HE204",
    "title": "Finding Ashley",
    "author": "Danielle Steel",
    "isbn": "978-1000000203",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Finding Ashley\" authored by Danielle Steel. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE204.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE204-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-01-05T13:45:35.526Z"
      },
      {
        "id": "rev-HE204-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-15T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-19T19:45:35.526Z",
    "updated_at": "2026-07-19T19:45:35.526Z"
  },
  {
    "id": "book-he205",
    "registration_number": "HE205",
    "title": "An Abundance Of Katherines",
    "author": "John Green",
    "isbn": "978-1000000204",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"An Abundance Of Katherines\" authored by John Green. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE205.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE205-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-01-04T13:45:35.526Z"
      },
      {
        "id": "rev-HE205-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-15T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-20T01:45:35.526Z",
    "updated_at": "2026-07-20T01:45:35.526Z"
  },
  {
    "id": "book-he206",
    "registration_number": "HE206",
    "title": "Through The Open Window",
    "author": "Vaishali Hamlai",
    "isbn": "978-1000000205",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Through The Open Window\" authored by Vaishali Hamlai. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE206.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE206-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-01-03T13:45:35.526Z"
      },
      {
        "id": "rev-HE206-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-14T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-20T07:45:35.526Z",
    "updated_at": "2026-07-20T07:45:35.526Z"
  },
  {
    "id": "book-he207",
    "registration_number": "HE207",
    "title": "Khwaabon Ka Safar",
    "author": "Mahesh Bhatt",
    "isbn": "978-1000000206",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Khwaabon Ka Safar\" written by Mahesh Bhatt. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE207.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE207-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-01-02T13:45:35.526Z"
      },
      {
        "id": "rev-HE207-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-14T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-20T13:45:35.526Z",
    "updated_at": "2026-07-20T13:45:35.526Z"
  },
  {
    "id": "book-he208",
    "registration_number": "HE208",
    "title": "The Zoya Factor",
    "author": "Anuja Chauhan",
    "isbn": "978-1000000207",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Zoya Factor\" authored by Anuja Chauhan. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE208.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE208-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-01-01T13:45:35.526Z"
      },
      {
        "id": "rev-HE208-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-13T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-20T19:45:35.526Z",
    "updated_at": "2026-07-20T19:45:35.526Z"
  },
  {
    "id": "book-he209",
    "registration_number": "HE209",
    "title": "The Best Of Tall Tales",
    "author": "Michael Burns",
    "isbn": "978-1000000208",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"The Best Of Tall Tales\" written by Michael Burns. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE209.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE209-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2025-12-31T13:45:35.526Z"
      },
      {
        "id": "rev-HE209-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-13T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-21T01:45:35.526Z",
    "updated_at": "2026-07-21T01:45:35.526Z"
  },
  {
    "id": "book-he210",
    "registration_number": "HE210",
    "title": "Agatha Raisin And The Curious Curate",
    "author": "M.C. Beaton",
    "isbn": "978-1000000209",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Agatha Raisin And The Curious Curate\" authored by M.C. Beaton. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE210.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE210-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2025-12-30T13:45:35.526Z"
      },
      {
        "id": "rev-HE210-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-12T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-21T07:45:35.526Z",
    "updated_at": "2026-07-21T07:45:35.526Z"
  },
  {
    "id": "book-he211",
    "registration_number": "HE211",
    "title": "Why We Kneel How We Rise",
    "author": "Michael Holding",
    "isbn": "978-1000000210",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Why We Kneel How We Rise\" written by Michael Holding. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE211.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE211-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2025-12-29T13:45:35.526Z"
      },
      {
        "id": "rev-HE211-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2026-04-12T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-21T13:45:35.526Z",
    "updated_at": "2026-07-21T13:45:35.526Z"
  },
  {
    "id": "book-he212",
    "registration_number": "HE212",
    "title": "The Maidens",
    "author": "Alex Michaelides",
    "isbn": "978-1000000211",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Maidens\" authored by Alex Michaelides. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE212.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE212-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-28T13:45:35.526Z"
      },
      {
        "id": "rev-HE212-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-11T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-21T19:45:35.526Z",
    "updated_at": "2026-07-21T19:45:35.526Z"
  },
  {
    "id": "book-he213",
    "registration_number": "HE213",
    "title": "Can't Hurt Me",
    "author": "David Goggins",
    "isbn": "978-1000000212",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Can't Hurt Me\" written by David Goggins. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE213.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE213-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Incredible insights and practical wisdom! Changed my perspective on the topic.",
        "created_at": "2025-12-27T13:45:35.526Z"
      },
      {
        "id": "rev-HE213-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "A thought-provoking book filled with powerful takeaways and real-world wisdom.",
        "created_at": "2026-04-11T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-22T01:45:35.526Z",
    "updated_at": "2026-07-22T01:45:35.526Z"
  },
  {
    "id": "book-he214",
    "registration_number": "HE214",
    "title": "Energize Your Mind",
    "author": "Gaur Gopal Das",
    "isbn": "978-1000000213",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Energize Your Mind\" written by Gaur Gopal Das. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE214.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE214-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2025-12-26T13:45:35.526Z"
      },
      {
        "id": "rev-HE214-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-10T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-22T07:45:35.526Z",
    "updated_at": "2026-07-22T07:45:35.526Z"
  },
  {
    "id": "book-he215",
    "registration_number": "HE215",
    "title": "Greatest Short stories Of Dostoevsky",
    "author": "Fyodor Dostoevsky",
    "isbn": "978-1000000214",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Greatest Short stories Of Dostoevsky\" authored by Fyodor Dostoevsky. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE215.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE215-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2025-12-25T13:45:35.526Z"
      },
      {
        "id": "rev-HE215-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-10T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-22T13:45:35.526Z",
    "updated_at": "2026-07-22T13:45:35.526Z"
  },
  {
    "id": "book-he216",
    "registration_number": "HE216",
    "title": "Chanakya In You",
    "author": "Radhakrishnan Pillai",
    "isbn": "978-1000000215",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Chanakya In You\" authored by Radhakrishnan Pillai. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE216.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE216-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-24T13:45:35.526Z"
      },
      {
        "id": "rev-HE216-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-09T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-22T19:45:35.526Z",
    "updated_at": "2026-07-22T19:45:35.526Z"
  },
  {
    "id": "book-he217",
    "registration_number": "HE217",
    "title": "The Let Them Theory",
    "author": "Mel Robbins",
    "isbn": "978-1000000216",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"The Let Them Theory\" authored by Mel Robbins. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE217.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE217-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2025-12-23T13:45:35.526Z"
      },
      {
        "id": "rev-HE217-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-09T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-23T01:45:35.526Z",
    "updated_at": "2026-07-23T01:45:35.526Z"
  },
  {
    "id": "book-he218",
    "registration_number": "HE218",
    "title": "Tongue in cheek",
    "author": "Khyrunnisa A",
    "isbn": "978-1000000217",
    "category": "Non-Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "An authoritative non-fiction work titled \"Tongue in cheek\" written by Khyrunnisa A. Offers profound insights, analytical rigor, and educational knowledge cataloged under Oakridge Library Acquisition ID HE218.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE218-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "Thoroughly researched and exceptionally well-written. Essential reading for all.",
        "created_at": "2025-12-22T13:45:35.526Z"
      },
      {
        "id": "rev-HE218-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "Fascinating, highly informative, and easy to understand.",
        "created_at": "2026-04-08T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-23T07:45:35.526Z",
    "updated_at": "2026-07-23T07:45:35.526Z"
  },
  {
    "id": "book-he219",
    "registration_number": "HE219",
    "title": "Dairy of a Wimpy Kid",
    "author": "Jeff Kinney",
    "isbn": "978-1000000218",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE219.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE219-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2025-12-21T13:45:35.526Z"
      },
      {
        "id": "rev-HE219-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-08T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-23T13:45:35.526Z",
    "updated_at": "2026-07-23T13:45:35.526Z"
  },
  {
    "id": "book-he220",
    "registration_number": "HE220",
    "title": "Dairy of a Wimpy Kid Rodrick Rules",
    "author": "Jeff Kinney",
    "isbn": "978-1000000219",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Rodrick Rules\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE220.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE220-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-20T13:45:35.526Z"
      },
      {
        "id": "rev-HE220-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-07T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-23T19:45:35.526Z",
    "updated_at": "2026-07-23T19:45:35.526Z"
  },
  {
    "id": "book-he221",
    "registration_number": "HE221",
    "title": "Dairy of a Wimpy Kid The Last Straw",
    "author": "Jeff Kinney",
    "isbn": "978-1000000220",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The Last Straw\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE221.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE221-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2025-12-19T13:45:35.526Z"
      },
      {
        "id": "rev-HE221-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-07T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-24T01:45:35.526Z",
    "updated_at": "2026-07-24T01:45:35.526Z"
  },
  {
    "id": "book-he222",
    "registration_number": "HE222",
    "title": "Dairy of a Wimpy Kid Dog Days",
    "author": "Jeff Kinney",
    "isbn": "978-1000000221",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Dog Days\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE222.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE222-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2025-12-18T13:45:35.526Z"
      },
      {
        "id": "rev-HE222-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-06T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-24T07:45:35.526Z",
    "updated_at": "2026-07-24T07:45:35.526Z"
  },
  {
    "id": "book-he223",
    "registration_number": "HE223",
    "title": "Dairy of a Wimpy Kid The Ugly Truth",
    "author": "Jeff Kinney",
    "isbn": "978-1000000222",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The Ugly Truth\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE223.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE223-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2025-12-17T13:45:35.526Z"
      },
      {
        "id": "rev-HE223-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-06T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-24T13:45:35.526Z",
    "updated_at": "2026-07-24T13:45:35.526Z"
  },
  {
    "id": "book-he224",
    "registration_number": "HE224",
    "title": "Dairy of a Wimpy Kid Cabin Fever",
    "author": "Jeff Kinney",
    "isbn": "978-1000000223",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Cabin Fever\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE224.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE224-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-16T13:45:35.526Z"
      },
      {
        "id": "rev-HE224-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-05T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-24T19:45:35.526Z",
    "updated_at": "2026-07-24T19:45:35.526Z"
  },
  {
    "id": "book-he225",
    "registration_number": "HE225",
    "title": "Dairy of a Wimpy Kid The Third Wheel",
    "author": "Jeff Kinney",
    "isbn": "978-1000000224",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The Third Wheel\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE225.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE225-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2025-12-15T13:45:35.526Z"
      },
      {
        "id": "rev-HE225-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-05T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-25T01:45:35.526Z",
    "updated_at": "2026-07-25T01:45:35.526Z"
  },
  {
    "id": "book-he226",
    "registration_number": "HE226",
    "title": "Dairy of a Wimpy Kid Hard Luck",
    "author": "Jeff Kinney",
    "isbn": "978-1000000225",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Hard Luck\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE226.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE226-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2025-12-14T13:45:35.526Z"
      },
      {
        "id": "rev-HE226-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-04T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-25T07:45:35.526Z",
    "updated_at": "2026-07-25T07:45:35.526Z"
  },
  {
    "id": "book-he227",
    "registration_number": "HE227",
    "title": "Dairy of a Wimpy Kid The Long Haul",
    "author": "Jeff Kinney",
    "isbn": "978-1000000226",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The Long Haul\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE227.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE227-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2025-12-13T13:45:35.526Z"
      },
      {
        "id": "rev-HE227-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-04T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-25T13:45:35.526Z",
    "updated_at": "2026-07-25T13:45:35.526Z"
  },
  {
    "id": "book-he228",
    "registration_number": "HE228",
    "title": "Dairy of a Wimpy Kid Old School",
    "author": "Jeff Kinney",
    "isbn": "978-1000000227",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Old School\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE228.",
    "rating": 4.6,
    "reviews": [
      {
        "id": "rev-HE228-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-12T13:45:35.526Z"
      },
      {
        "id": "rev-HE228-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-03T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-25T19:45:35.526Z",
    "updated_at": "2026-07-25T19:45:35.526Z"
  },
  {
    "id": "book-he229",
    "registration_number": "HE229",
    "title": "Dairy of a Wimpy Kid Double Down",
    "author": "Jeff Kinney",
    "isbn": "978-1000000228",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Double Down\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE229.",
    "rating": 4.7,
    "reviews": [
      {
        "id": "rev-HE229-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2025-12-11T13:45:35.526Z"
      },
      {
        "id": "rev-HE229-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-03T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-26T01:45:35.526Z",
    "updated_at": "2026-07-26T01:45:35.526Z"
  },
  {
    "id": "book-he230",
    "registration_number": "HE230",
    "title": "Dairy of a Wimpy Kid The Gateway",
    "author": "Jeff Kinney",
    "isbn": "978-1000000229",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The Gateway\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE230.",
    "rating": 4.8,
    "reviews": [
      {
        "id": "rev-HE230-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2025-12-10T13:45:35.526Z"
      },
      {
        "id": "rev-HE230-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-04-02T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-26T07:45:35.526Z",
    "updated_at": "2026-07-26T07:45:35.526Z"
  },
  {
    "id": "book-he231",
    "registration_number": "HE231",
    "title": "Dairy of a Wimpy Kid The MeltDown",
    "author": "Jeff Kinney",
    "isbn": "978-1000000230",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The MeltDown\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE231.",
    "rating": 4.9,
    "reviews": [
      {
        "id": "rev-HE231-1",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2025-12-09T13:45:35.526Z"
      },
      {
        "id": "rev-HE231-2",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-04-02T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-26T13:45:35.526Z",
    "updated_at": "2026-07-26T13:45:35.526Z"
  },
  {
    "id": "book-he232",
    "registration_number": "HE232",
    "title": "Dairy of a Wimpy Kid Wrecking Ball",
    "author": "Jeff Kinney",
    "isbn": "978-1000000231",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Wrecking Ball\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE232.",
    "rating": 4,
    "reviews": [
      {
        "id": "rev-HE232-1",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-08T13:45:35.526Z"
      },
      {
        "id": "rev-HE232-2",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-04-01T13:45:35.526Z"
      }
    ],
    "created_at": "2026-07-26T19:45:35.526Z",
    "updated_at": "2026-07-26T19:45:35.526Z"
  },
  {
    "id": "book-he233",
    "registration_number": "HE233",
    "title": "Dairy of a Wimpy Kid The Deep End",
    "author": "Jeff Kinney",
    "isbn": "978-1000000232",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid The Deep End\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE233.",
    "rating": 4.1,
    "reviews": [
      {
        "id": "rev-HE233-1",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2025-12-07T13:45:35.526Z"
      },
      {
        "id": "rev-HE233-2",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-04-01T01:45:35.526Z"
      }
    ],
    "created_at": "2026-07-27T01:45:35.526Z",
    "updated_at": "2026-07-27T01:45:35.526Z"
  },
  {
    "id": "book-he234",
    "registration_number": "HE234",
    "title": "Dairy of a Wimpy Kid Big Shot",
    "author": "Jeff Kinney",
    "isbn": "978-1000000233",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Big Shot\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE234.",
    "rating": 4.2,
    "reviews": [
      {
        "id": "rev-HE234-1",
        "reviewer_name": "Ananya Roy (Grade 10)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2025-12-06T13:45:35.527Z"
      },
      {
        "id": "rev-HE234-2",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-03-31T13:45:35.527Z"
      }
    ],
    "created_at": "2026-07-27T07:45:35.527Z",
    "updated_at": "2026-07-27T07:45:35.527Z"
  },
  {
    "id": "book-he235",
    "registration_number": "HE235",
    "title": "Dairy of a Wimpy Kid Diper Over Load",
    "author": "Jeff Kinney",
    "isbn": "978-1000000234",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Diper Over Load\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE235.",
    "rating": 4.3,
    "reviews": [
      {
        "id": "rev-HE235-1",
        "reviewer_name": "Rohan Verma (Grade 12)",
        "rating": 4,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2025-12-05T13:45:35.527Z"
      },
      {
        "id": "rev-HE235-2",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 5,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2026-03-31T01:45:35.527Z"
      }
    ],
    "created_at": "2026-07-27T13:45:35.527Z",
    "updated_at": "2026-07-27T13:45:35.527Z"
  },
  {
    "id": "book-he236",
    "registration_number": "HE236",
    "title": "Dairy of a Wimpy Kid No Brainer",
    "author": "Jeff Kinney",
    "isbn": "978-1000000235",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid No Brainer\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE236.",
    "rating": 4.4,
    "reviews": [
      {
        "id": "rev-HE236-1",
        "reviewer_name": "Diya Patel (Grade 9)",
        "rating": 4,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2025-12-04T13:45:35.527Z"
      },
      {
        "id": "rev-HE236-2",
        "reviewer_name": "Kabir Sengupta (Grade 10)",
        "rating": 5,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2026-03-30T13:45:35.527Z"
      }
    ],
    "created_at": "2026-07-27T19:45:35.527Z",
    "updated_at": "2026-07-27T19:45:35.527Z"
  },
  {
    "id": "book-he237",
    "registration_number": "HE237",
    "title": "Dairy of a Wimpy Kid Hot Mess",
    "author": "Jeff Kinney",
    "isbn": "978-1000000236",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Hot Mess\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE237.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE237-1",
        "reviewer_name": "Siddharth Nair (Faculty)",
        "rating": 4,
        "comment": "Captivating storyline and brilliant character development. Couldn't put it down!",
        "created_at": "2025-12-03T13:45:35.527Z"
      },
      {
        "id": "rev-HE237-2",
        "reviewer_name": "Meera Deshmukh (Grade 12)",
        "rating": 5,
        "comment": "Extremely engaging read! Highly recommended for high school literature students.",
        "created_at": "2026-03-30T01:45:35.527Z"
      }
    ],
    "created_at": "2026-07-28T01:45:35.527Z",
    "updated_at": "2026-07-28T01:45:35.527Z"
  },
  {
    "id": "book-he238",
    "registration_number": "HE238",
    "title": "Dairy of a Wimpy Kid Party Pooper",
    "author": "Jeff Kinney",
    "isbn": "978-1000000237",
    "category": "Fiction",
    "publisher": "Oakridge Academic Press",
    "edition": "Official Library Acquisition Edition",
    "total_copies": 1,
    "available_copies": 1,
    "status": "available",
    "shelf_location": null,
    "cover_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    "description": "A gripping work of fiction titled \"Dairy of a Wimpy Kid Party Pooper\" authored by Jeff Kinney. Features rich narrative themes, compelling dialogue, and memorable storytelling cataloged under Oakridge Library Acquisition ID HE238.",
    "rating": 4.5,
    "reviews": [
      {
        "id": "rev-HE238-1",
        "reviewer_name": "Priya Iyer (Grade 11)",
        "rating": 4,
        "comment": "A remarkable literary masterpiece with deep themes and emotional storytelling.",
        "created_at": "2025-12-02T13:45:35.527Z"
      },
      {
        "id": "rev-HE238-2",
        "reviewer_name": "Aarav Sharma (Grade 11)",
        "rating": 5,
        "comment": "An unforgettable narrative that keeps you hooked from the first page.",
        "created_at": "2026-03-29T13:45:35.527Z"
      }
    ],
    "created_at": "2026-07-28T07:45:35.527Z",
    "updated_at": "2026-07-28T07:45:35.527Z"
  }
];

export const INITIAL_LOGS: RegistrationLog[] = [
  {
    id: 'log-init-001',
    book_id: 'book-he001',
    action: 'registered',
    details: {
      registration_number: 'HE001',
      title: 'Pilgrims Way',
      author: 'Abdul Razak Gurnah',
      category: 'Fiction',
      total_copies: 4,
      shelf_location: 'Shelf F-01',
      status: 'available'
    },
    created_at: new Date().toISOString(),
    book: {
      title: 'Pilgrims Way',
      registration_number: 'HE001',
      author: 'Abdul Razak Gurnah'
    }
  }
];

const DAY_MS = 24 * 60 * 60 * 1000;

export const INITIAL_BORROWS: BorrowRecord[] = [
  {
    id: 'borrow-init-001',
    book_id: 'book-he003',
    book_title: 'Little Book Of Wisdom',
    registration_number: 'HE003',
    author: 'Kahlil Gibran',
    shelf_location: 'Shelf F-03',
    student_id: 'STU-2026-003',
    student_name: 'Marcus Williams',
    student_class: 'Grade 10-A',
    roll_number: 'R-1003',
    email: 'marcus.williams3@oakridge.edu',
    issued_at: new Date(Date.now() - 12 * DAY_MS).toISOString(),
    due_date: new Date(Date.now() - 5 * DAY_MS).toISOString(),
    returned_at: null,
    fine_amount: 5.00,
    fine_status: 'pending',
    status: 'overdue',
  },
  {
    id: 'borrow-init-002',
    book_id: 'book-he007',
    book_title: 'I am Malala',
    registration_number: 'HE007',
    author: 'Malala Yousafzai',
    shelf_location: 'Shelf NF-07',
    student_id: 'STU-2026-002',
    student_name: 'Sophia Johnson',
    student_class: 'Grade 9-B',
    roll_number: 'R-1002',
    email: 'sophia.johnson2@oakridge.edu',
    issued_at: new Date(Date.now() - 9 * DAY_MS).toISOString(),
    due_date: new Date(Date.now() - 2 * DAY_MS).toISOString(),
    returned_at: null,
    fine_amount: 2.00,
    fine_status: 'pending',
    status: 'overdue',
  },
  {
    id: 'borrow-init-003',
    book_id: 'book-he014',
    book_title: 'Complete Works Of Sherlock Holmes',
    registration_number: 'HE014',
    author: 'Sir Arther Conan Doyle',
    shelf_location: 'Shelf F-14',
    student_id: 'STU-2026-001',
    student_name: 'Alex Smith',
    student_class: 'Grade 9-A',
    roll_number: 'R-1001',
    email: 'alex.smith1@oakridge.edu',
    issued_at: new Date(Date.now() - 3 * DAY_MS).toISOString(),
    due_date: new Date(Date.now() + 4 * DAY_MS).toISOString(),
    returned_at: null,
    fine_amount: 0,
    fine_status: 'none',
    status: 'active',
  }
];
