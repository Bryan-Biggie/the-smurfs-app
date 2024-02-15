import { Injectable, OnDestroy } from '@angular/core';
import { Item } from './item.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { takeWhile } from 'rxjs/operators';
import { LoggingService } from '../services/logging.service';

@Injectable()
export class MainListService implements OnDestroy {
  public className = 'MainListService';

  public sizeOfList: number;
  isFetched: boolean = false;
  displayLoading: any = new BehaviorSubject<number>(0);
  // itemsChanged = new BehaviorSubject<Item[]>([]);
  itemsChanged: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private items: Item[] = [];
  public alive: boolean = true;

  //  private items: Item[] = [
  //   new Item(
  //     1,
  //     'Poet Smurf',
  //     "With a flair for language and a passion for verse, this character brings eloquence and beauty to the series as he composes poems inspired by the world around him. His heartfelt compositions often provide insight into the emotions and experiences of his fellow Smurfs, emphasizing the importance of communication and self-expression. Furthermore, his talent for transforming thoughts and feelings into captivating poetry showcases the transformative power of words.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG43.png',
  //     'Male',
  //     154,
  //     25
  //   ),
  //   new Item(
  //     2,
  //     'Grouchy Smurf',
  //     "Famous for his grumbling and cantankerous attitude, this character brings depth and complexity to the show by highlighting the fact that not everyone is always sunshine and rainbows. Through his interactions with others, he demonstrates the power of empathy and understanding, even when dealing with someone who appears unapproachable. As the series progresses, his character evolves by learning the importance of opening up to others and embracing positivity.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG7.png',
  //     'Male',
  //     153,
  //     24
  //   ),
  //   new Item(
  //     3,
  //     'Smurfette',
  //     "As the sole female Smurf in the village, she brings a unique perspective and presence to the show, captivating audiences with her kindness, intelligence, and beauty. Her story arc of self-discovery and personal growth serves as an inspiring tale of empowerment and resilience, demonstrating the importance of embracing one's true identity. Her character reinforces the idea that we all have something special to offer and that our differences make us strong.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG53.png',
  //     'Female',
  //     130,
  //     21
  //   ),
  //   new Item(
  //     4,
  //     'Hefty Smurf',
  //     "With his impressive strength and unwavering determination, this character showcases the importance of physical fitness and perseverance. Whether he's lifting heavy objects or protecting his fellow Smurfs from harm, his bravery and dedication to his community make him an inspiring role model. His character also serves as a reminder that strength comes in many forms – both physical and emotional – and can be harnessed to overcome adversity.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG9.png',
  //     'Male',
  //     157,
  //     25
  //   ),
  //   new Item(
  //     5,
  //     'Willow',
  //     "The girls’ leader and the female equivalent of Papa Smurf.  She’s the matriarch, someone the girls trust and look up to. And for good reason. She’s wise, strong, brave, and funny. She knows the secrets of nature and the properties of every kind of plant. She can even communicate with them! Unlike Papa Smurf, Willow is more like a shaman than an alchemist.She has a lighter side too and she loves to tease Papa Smurf. Without a doubt, her favorite pastime is playing dominoes. And nobody dares challenge her because she’s just too good !",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG71.png',
  //     'Female',
  //     1,
  //     22
  //   ),
  //   new Item(
  //     6,
  //     'Clumsy Smurf',
  //     "Despite being constantly tripped up by his own two feet, this endearing character never fails to bring humor and heart to every situation. His oafish appearances and lack of coordination lend themselves to frequent misunderstandings and comical mishaps, which often result in calamity for others. However, his optimism, adaptability, and unconditional love for his fellow Smurfs make him an incredibly lovable character whose value transcends his clumsiness.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG40.png',
  //     'Male',
  //     151,
  //     22
  //   ),
  //   new Item(
  //     7,
  //     'Sloppy Smurf',
  //     "A lover of filth and chaos, this character stands out among the meticulously clean and orderly Smurfs with his disheveled appearance and unique enjoyment of all things dirty. His fondness for sloppiness and untidiness creates both humor and conflict, reminding audiences that not everyone shares the same definition of cleanliness – and that's okay. His messy demeanor adds a touch of variety to the show, proving that diversity in character traits and personal preferences can enrich a community.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG13.png',
  //     'Male',
  //     152,
  //     24
  //   ),
  //   new Item(
  //     8,
  //     'Blossom',
  //     "Blossom is the cheerleader, overflowing with positive energy. She’s incredibly talkative, energetic, even exhausting. Blossom gets excited about everything and shows it, bouncing around and talking a mile a minute. She says whatever crosses her mind without thinking first, which can be inappropriate, but also very funny. She is a great friend and adores meeting new people.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG14.png',
  //     'Female',
  //     2,
  //     23
  //   ),
  //   new Item(
  //     9,
  //     'Chef Smurf',
  //     "Whether creating delicious feasts or baking mouthwatering treats, this culinary master showcases the power of food in bringing people together and uplifting spirits. His creativity and dedication to his craft not only keep the Smurf village well-fed but also highlight the importance of passion and the joy that can be found in sharing one's talents. Moreover, his character serves as a reminder that everyone has a unique role to play within a community, and that even seemingly small contributions can have a significant impact.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG16.png',
  //     'Male',
  //     149,
  //     23
  //   ),
  //   new Item(
  //     10,
  //     'Brainy Smurf',
  //     "As the village intellectual, this bespectacled character impresses with his vast knowledge, quick wit, and penchant for delivering eloquent speeches – albeit sometimes unsolicited. Although his know-it-all attitude often rubs others the wrong way, his expertise and problem-solving skills make him a valuable asset in overcoming countless obstacles. His character highlights the importance of intelligence and critical thinking, while also teaching the value of humility and listening to others' perspectives.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG54.png',
  //     'Male',
  //     147,
  //     23
  //   ),
  //   new Item(
  //     11,
  //     'Brainy Smurf',
  //     "As the village intellectual, this bespectacled character impresses with his vast knowledge, quick wit, and penchant for delivering eloquent speeches – albeit sometimes unsolicited. Although his know-it-all attitude often rubs others the wrong way, his expertise and problem-solving skills make him a valuable asset in overcoming countless obstacles. His character highlights the importance of intelligence and critical thinking, while also teaching the value of humility and listening to others' perspectives.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG18.png',
  //     'Male',
  //     147,
  //     23,
  //   ),
  //   new Item(
  //     12,
  //     'Brainy Smurf',
  //     "As the village intellectual, this bespectacled character impresses with his vast knowledge, quick wit, and penchant for delivering eloquent speeches – albeit sometimes unsolicited. Although his know-it-all attitude often rubs others the wrong way, his expertise and problem-solving skills make him a valuable asset in overcoming countless obstacles. His character highlights the importance of intelligence and critical thinking, while also teaching the value of humility and listening to others' perspectives.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG20.png',
  //     'Male',
  //     147,
  //     23
  //   ),
  //   new Item(
  //     13,
  //     'Princess Salvina',
  //     "This courageous and kind-hearted princess brings a touch of royalty and enchantment to the series as she bravely stands up against evil forces. Her spirit of adventure and determination to help others make her an inspiration for both the Smurfs and viewers alike. Furthermore, her valiant efforts to protect her kingdom from harm demonstrate the importance of selflessness and bravery.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG23.png',
  //     'Female',
  //     150,
  //     20
  //   ),
  //   new Item(
  //     14,
  //     'Scaredy Smurf',
  //     "This timid and anxious character demonstrates the universal nature of fear and the need to confront it to grow and thrive. His trepidation often leads to humorous situations and misunderstandings, but his gradual building of confidence throughout the series showcases the importance of self-belief and courage. Through his experiences, viewers learn valuable lessons about facing one's fears and the power of supportive friendships.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG24.png',
  //     'Male',
  //     148,
  //     22
  //   ),
  //   new Item(
  //     15,
  //     'Vanity Smurf',
  //     "This character's preoccupation with his own appearance and self-admiration brings both humor and insight to the series. Although often perceived as shallow or narcissistic, he serves as an important reminder of the importance of self-love and confidence. Moreover, his personal growth throughout the show highlights the need for balancing self-esteem with humility and empathy for others.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG67.png',
  //     'Male',
  //     155,
  //     24
  //   ),
  //   new Item(
  //     16,
  //     'Vexy',
  //     "Vexy is the secondary antagonist turned deuteragonist of The Smurfs 2. and a cameo character of The Smurfs: The Legend of Smurfy Hollow. She is a smart and mischievous former Naughty who was created by Gargamel along with Hackus.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG68.png',
  //     'Other',
  //     2,
  //     24
  //   ),
  //   new Item(
  //     17,
  //     'Papa Smurf',
  //     "As the wise, knowledgeable, and authoritative leader of the Smurf village, he guides and mentors his fellow Smurfs through various challenges, conflicts, and adventures. His fatherly demeanor and distinct red clothing symbolize his crucial role in providing stability and direction for the village. His penchant for creating magical potions and offering sage advice highlights the significance of experience, wisdom, and leadership.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG29.png',
  //     'Male',
  //     547,
  //     27
  //   ),
  //   new Item(
  //     18,
  //     'Grouchy Smurf',
  //     'Famous for his grumbling and cantankerous attitude, this character brings depth and complexity to the show by highlighting the fact that not everyone is always sunshine and rainbows. Through his interactions with others, he demonstrates the power of empathy and understanding, even when dealing with someone who appears unapproachable. As the series progresses, his character evolves by learning the importance of opening up to others and embracing positivity.',
  //     'https://pngimg.com/uploads/smurf/smurf_PNG30.png',
  //     'Male',
  //     153,
  //     24
  //   ),
  //   new Item(
  //     19,
  //     'Gutsy Smurf',
  //     "With his adventurous spirit and fearless approach to life, this character injects excitement and bravery into the show's storylines. His daring escapades often lead to thrilling and suspenseful adventures, showcasing the importance of courage and resilience in overcoming challenges. Through his actions, he encourages his fellow Smurfs to step out of their comfort zones and embrace new experiences with gusto.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG32.png',
  //     'Male',
  //     155,
  //     28
  //   ),
  //   new Item(
  //     20,
  //     'Hackus',
  //     "Hackus is one of the (former) tertiary antagonists in The Smurfs 2. He is a funny and physical Naughty who was created by Gargamel along with Vexy.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG33.png',
  //     'Other',
  //     2,
  //     26
  //   ),
  //   new Item(
  //     21,
  //     'Jokey Smurf',
  //     "As the village prankster, this character's mischievous sense of humor brings laughter and lightheartedness to even the most serious situations. Despite occasionally rubbing others the wrong way with his practical jokes, his good-hearted nature and genuine affection for his fellow Smurfs make his antics more endearing than malicious. Through his character, audiences learn the value of humor, playfulness, and the importance of not taking oneself too seriously.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG42.png',
  //     'Male',
  //     153,
  //     20
  //   ),
  //   new Item(
  //     22,
  //     'Lily',
  //     "Lily is very smart and rational, never acts without thinking something through, and has little time for silliness. Lily is quieter than the other girls, but when she speaks, she means it. She tells it like it is and pulls no punches. She’s one of the few girls who can calm Storm down when something – or someone – has gotten her riled up.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG59.png',
  //     'Female',
  //     2,
  //     20
  //   ),
  //   new Item(
  //     23,
  //     'Hefty Smurf',
  //     "With his impressive strength and unwavering determination, this character showcases the importance of physical fitness and perseverance. Whether he's lifting heavy objects or protecting his fellow Smurfs from harm, his bravery and dedication to his community make him an inspiring role model. His character also serves as a reminder that strength comes in many forms – both physical and emotional – and can be harnessed to overcome adversity.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG36.png',
  //     'Male',
  //     157,
  //     25
  //   ),
  //   new Item(
  //     24,
  //     'Storm',
  //     "The fiercest female Smurf, Storm is an expert markswoman, an outstanding athlete, brave as can be, and as tough as nails. She loves to challenge Hefty and show off how strong and agile she is. Storm is not the least bit touchy-feely and has no patience for the mushy stuff – except when it comes to kittens. At times, she can be rather abrasive. That said, she is extremely loyal and protective of her friends.",
  //     'https://pngimg.com/uploads/smurf/smurf_PNG39.png',
  //     'Female',
  //     1,
  //     21
  //   ),
  // ];

  constructor(
    private dataService: DataStorageService,
    private loggingService: LoggingService,
    public dialog: MatDialog
  ) {
    let methodName = 'constructor';
    try {
      this.dataService.fetchingCharacters
        .pipe(takeWhile(() => this.alive))
        .subscribe((status) => {// listens to the DAL if there is any change to the database/ when data has been fetched from the API
          if (status === '200') {
          this.setItemsCheckStatus(status);//calls this method to go and fetch the data
          }
          else if(status !== '0'){
            this.errorMessage(status);
          }
        });
      this.dataService.creatingCharacter
        .pipe(takeWhile(() => this.alive))
        .subscribe((status) => {// listens to the DAL when a new character is added to the database
          if (status === '200') {
          this.addItemCheckStatus(status);//calls this method to add the new character to the array copy in the business layer
        }
        else if(status !== '0'){
          this.errorMessage(status);
        }
        });
      this.dataService.updateCharacter
        .pipe(takeWhile(() => this.alive))
        .subscribe((status) => {// listens to the DAL when a character is updated in the database
          if (status === '200') {
          this.updateCheckStatus(status);//calls this method to update the character in the array copy in the business layer
        }
        else if(status !== '0'){
          this.errorMessage(status);
        }
        });
      this.dataService.deleteCharacter
        .pipe(takeWhile(() => this.alive))
        .subscribe((status) => {// listens to the DAL when a character is deleted in the database
          if (status === '200') {
          this.removeItemCheckStatus(status);//calls this method to delete the character in the array copy in the business layer
        }
        else if(status !== '0'){
          this.errorMessage(status);
        }
        });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  setItems() {// this method is called by the components to tell the business layer to go fetch the data from the DAL
    let methodName = 'setItems';
    try {
      if (!this.dataService.isDataFetched) {// this checks if the data is fetched, if its fetched it does not call the DAL it just sends the array it has to the components.
        this.displayLoading.next(0);//this starts the loading screen
        this.dataService.fetchItems();//this calls the DAL to fetch the data from the api
        this.isFetched = true;
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  setItemsCheckStatus(status) {// this method listens to the code from the DAL
    let methodName = 'setItemsCheckStatus';
    try {
      if (status === '200') {
        this.items = this.dataService.responseData;
        this.itemsChanged.next(200);//this tells the components that the data has been fetched
        this.displayLoading.next(200);// stops the loading screen
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  addItem(newItem: Item) {// this method is called by the components to tell the business layer to send a new character to the database from the DAL
    let methodName = 'addItem';
    try {
      this.displayLoading.next(0);
      this.dataService.createAndStoreItem(newItem); // this adds the item to the database
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  addItemCheckStatus(status) {// this listens to the DAL when a new character is added to the database, then it also updates the copy of the array in the business layer
    let methodName = 'addItemCheckStatus';
    try {
      if (status === '200') {
        let newItem = this.dataService.responseData;// fetches the data from the DAL
        this.items.push(newItem);
        this.itemsChanged.next(200);
        this.displayLoading.next(200);
        this.dialog.open(DialogComponent, {
          data: {
            heading: 'NEW SMURF!',
            body: 'The smurf ' + newItem.name + ' has been added to the list.',
          },
        });
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  removeItem(itemDelete: Item): void {// this method is called by the components to tell the business layer to delate a character in the database by telling the DAL to do that
    let methodName = 'removeItem';
    try {
      this.displayLoading.next(0);
      this.dataService.deleteItem(itemDelete);// this deletes the item in the database
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  removeItemCheckStatus(status) {// this listens to the DAL when a character is deleted in the database, then it also updates the copy of the array in the business layer
    let methodName = 'removeItemCheckStatus';
    try {
      if (status === '200') {
        let itemDelete: Item = this.dataService.responseData;// fetches the data from the DAL
        const indexToRemove = this.items.findIndex(
          (item) => item.id === itemDelete.id
        );

        if (indexToRemove !== -1) {
          this.items.splice(indexToRemove, 1);// this removes the item from the array
          this.itemsChanged.next(200);
          // this.itemsChanged.next(this.items.slice());
          this.displayLoading.next(200);

          this.dialog.open(DialogComponent, {
            data: {
              heading: 'DELETED!',
              body:
                'Smurf ' + itemDelete.name + ' has been REMOVED from the list!',
            },
          });
        }
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  updateItem(itemInfo: Item): void { // this method is called by the components to tell the business layer to send the updates of a character to the database by telling the DAL to di that through the api
    let methodName = 'updateItem';
    try {
      this.displayLoading.next(0);
      this.dataService.updateItem(itemInfo); // this adds the item to the database
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  updateCheckStatus(status: string) {// this listens to the DAL when a character is updated in the database, then it also updates the copy of the array in the business layer
    let methodName = 'updateCheckStatus';
    try {
      if (status === '200') {
        let itemInfo = this.dataService.responseData;// fetches the data from the DAL
        let index = this.items.findIndex((item) => item.id === itemInfo.id);

        if (index !== -1) {
          this.items[index] = itemInfo;// here it updates the copy of the array
          this.itemsChanged.next(200);
          this.displayLoading.next(200);

          this.dialog.open(DialogComponent, {
            data: {
              heading: 'SAVED!',
              body:
                'The changes made to ' + itemInfo.name + ' have been saved!',
            },
          });
        } else {
          this.dialog.open(DialogComponent, {
            data: {
              heading: 'FAILED!',
              body: `Item with ID ${itemInfo.id} not found`,
            },
          });
        }
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  errorMessage(status){
    
    this.dialog.open(DialogComponent, {
      data: {
        heading: 'WARNING!',
        body:
          'The was an error when fetchong data from the API. Code: '+ status,
      },
    });
  }

  getListSize() {
    return this.items.length;
  }
  getItems() {// this returns a copy of the array with a list of all the characters
    return this.items.slice();
  }
  getItemId(id: number) {// this returns the item with that ID because the id and index are the same.
    return this.items[id];
  }
  ngOnDestroy() {
    let methodName = 'ngOnDestroy';
    try {
      this.alive = false;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  resetValues() {
    this.itemsChanged.next(0);
    this.items = [];
  }
}
