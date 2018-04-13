import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const languages = [
      { id: 11, name: 'Angular' },
      { id: 12, name: 'Vue' },
      { id: 13, name: 'React' },
      { id: 14, name: 'Vanilla' },
      { id: 15, name: 'RxJS' },
      { id: 16, name: 'Jquery' },
      { id: 17, name: 'Ember' },
      { id: 18, name: 'Polymer' },
      { id: 19, name: 'Node' },
      { id: 20, name: 'Meteor' }
    ];
    return {languages};
  }
}
