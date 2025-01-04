import { Routes } from '@angular/router';
import { ParerntComponent } from './Components/parernt/parernt.component';
import { countryresolverResolver, userresolverResolver } from './Components/parernt/userresolver.resolver';
import { ChildComponent } from './Components/child/child.component';

export const routes: Routes = [{
    path: '',
    component: ParerntComponent,
    resolve: {
        user: userresolverResolver
    }
},
{
    path: 'child',
    component: ChildComponent,
    // resolve: {
    //     country: countryresolverResolver
    // }
}
];
