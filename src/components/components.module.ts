import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular"; //imported for ion-item

// components import decleration and exports for inter-dependencies and usage within the app.
import { SearchResultsComponent } from "./search-results/search-results.component";
import { RepositoriesComponent } from "./repositories/repositories.component";

@NgModule({
    declarations:[SearchResultsComponent, RepositoriesComponent],
    imports:[IonicModule],
    exports:[SearchResultsComponent, RepositoriesComponent]
})

export class ComponentModule {

}