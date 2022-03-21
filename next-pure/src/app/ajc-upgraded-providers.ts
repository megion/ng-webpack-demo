import { Injector } from '@angular/core'

export const ScopeProvider = {
  deps: ['$injector'],
  provide: '$scope',
  useFactory: (injector: Injector) => injector.get('$rootScope').$new(),
}
