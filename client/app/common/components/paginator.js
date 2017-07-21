(function() {
    angular.module('app').component('paginator', {
        bindings: {
            url: '@',
            pages: '@',
        },
        controller: [
            '$location',
            function($location) {
                this.$onInit = function() {
                    const pages = parseInt(this.pages) || 1
                    this.pagesArray = Array(pages).fill(0).map((e, i) => i + 1)
                    this.current = parseInt($location.search().page) || 1
                    this.needPagination = pages > 1
                    this.hasPrev = this.current > 1
                    this.hasNext = this.current < this.pages
                    this.urlPaginator = 'http://localhost:3000/#!/billingCycle'
                }

                this.isCurrent = function(i) {
                    return this.current == i
                }
            }
        ],
        template: `
            <ul ng-if="$ctrl.needPagination" class="pagination pagination-sm no-margin pull-right">
                <li ng-if="$ctrl.hasPrev">
                    <a href="{{ $ctrl.urlPaginator }}?page={{ $ctrl.current - 1 }}">Anterior</a>
                </li>

                <li ng-class="{active: $ctrl.isCurrent(index)}" ng-repeat="index in $ctrl.pagesArray">
                    <a href="{{ $ctrl.urlPaginator }}?page={{ index }}">{{ index }}</a>
                </li>

                <li ng-if="$ctrl.hasNext">
                    <a href="{{ $ctrl.urlPaginator }}?page={{ $ctrl.current + 1 }}">Próximo</a>
                </li>
            </ul>
        `
    })
})()