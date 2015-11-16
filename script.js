	
angular.module("myApp",[]).controller('myController',function($scope){

	function House(name, address, saleStatus, listPrice, zEstimate, deal, mortgage, image){
		this.name = name;
		this.address = address;
		this.saleStatus = saleStatus;
		this.listPrice = listPrice;
		this.zEstimate = zEstimate;
		this.deal = deal;
		this.mortgage = mortgage;
		this.image = image;
	}
	House.prototype.city = "Atlanta";
	House.prototype.state = "GA";
	House.prototype.zip = "30327";
	var houseArray = [];
	houseArray.push(new House("The Villa","4747 Northside Dr NW","For Sale","$2,999,000","$4,031,664","A good deal!! (25% off!)","$11,179/mo","http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg"));
	houseArray.push(new House("The Pool House","1101 Garmon Dr NW","For Sale","$2,399,000","$2,684,662","Average Deal","$8,943/mo","http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg"));
	houseArray.push(new House("The Awesome","914 Davis Dr NW","NOT For Sale","-","$2,134,055","-","-","http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510"));
	houseArray.push(new House("Versailles","5115 Northside Dr NW","For Sale","$8,000,000","$12,360,014","A crazy deal!! (30% off!)","$29,821/mo","http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg"));
	$scope.houses = houseArray;
	console.log($scope.houses)
});