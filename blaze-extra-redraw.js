if (Meteor.isClient) {

    col = new Mongo.Collection();

    col.insert({_id: "0"});
    col.insert({_id: "1"});
    col.insert({_id: "2"});

    Template.hello.helpers({

        data: function() {

            return {

                data: col.find({}).fetch()

            };

        }

    });

    Template.child.helpers({

        value: function() {

            console.log("value " + this._id);

            Template.parentData(1);

            return this._id;

        }

    });

}