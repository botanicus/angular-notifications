require(['notifications.js'], function (service) {
  var NotificationList = service.NotificationList;
  var Notification = service.Notification;

  describe("service", function () {
    it("has logging option defaulting to false", function () {
      expect(service.logging).toBe(false);
    });

    it("has logging timeout defaulting to 3500", function () {
      expect(service.timeout).toBe(3500);
    });

    it("has an empty notification list", function () {
      expect(service.list).toEqual(jasmine.any(NotificationList));
    });
  });


  describe("Notification", function () {
    var notification;

    beforeEach(function () {
      notification = new Notification("Hello World!");
    });

    it("has a message", function () {
      expect(notification.message).toBe("Hello World!");
    });

    describe("options", function () {
      it("type defaults to 'success'", function () {
        expect(notification.options.type).toBe('success');
      });

      it("sticky defaults to false", function () {
        expect(notification.options.sticky).toBe(false);
      });
    });

    describe("remove", function () {
      // TODO.
    });
  });


  describe("NotificationList", function () {
    var notifications;

    beforeEach(function () {
      notifications = new NotificationList();
    });

    describe("create", function () {
      it("pushes a new notification to the list", function () {
        expect(notifications.collection.length).toEqual(0);
        notifications.create("A new one!");
        expect(notifications.collection.length).toEqual(1);
      });

      it("creates a new notification with given message", function () {
        var notification = notifications.create("A new one!");
        expect(notification.message).toEqual("A new one!");
      });

      it("creates a new notification with given message and options", function () {
        var notification = notifications.create("A new one!", {sticky: true});
        expect(notification.message).toEqual("A new one!");
        expect(notification.options.sticky).toBe(true);
      });

      xit("registers a notification for deletion if it is NOT sticky", function () {
        var notification = notifications.create("A new one!");
      });

      xit("registers a notification for deletion if it IS sticky", function () {
        var notification = notifications.create("A new one!", {sticky: true});
      });

      xit("triggers the broadcast() function", function () {
      });
    });

    describe("remove", function () {
      xit("removes a notification from the list after a timeout", function () {
      });

      xit("triggers the broadcast() function", function () {
      });
    });
  });

  // Run the tests.
  document.querySelector('.alert').innerHTML = '';
  jasmine.getEnv().execute()
});
