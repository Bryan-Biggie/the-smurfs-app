import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "../item.model";
@Pipe({
    name: 'filterCharacter'
})
export class FilterPipe implements PipeTransform{
    transform(characters: Item[], filterText: string) {
        if(characters.length === 0 || filterText === ''){
            return characters;
        }else{
            return characters.filter((character) =>{
                return character.sex.toLocaleLowerCase() === filterText.toLocaleLowerCase();
            });
        }
    }

}