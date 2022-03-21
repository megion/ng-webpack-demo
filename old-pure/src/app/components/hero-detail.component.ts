export const heroDetail = {
  bindings: {
    hero: '<',
    deleted: '&',
  },
  template: `
    <h2>{{$ctrl.hero.name}} details!</h2>
    <div><label>id: </label>{{$ctrl.hero.id}}</div>
    <button type="button" ng-click="$ctrl.onDelete()">Delete</button>
  `,
  controller: function HeroDetailController() {
    this.onDelete = () => {
      this.deleted(this.hero)
    }
  },
}
