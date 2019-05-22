Parse.Cloud.afterSave(Parse.User, async req => {
    // Init new employee 
    const query = new Parse.Query("Employee");
    query.equalTo("Owner", req.object);
    let u = await query.first({
        useMasterKey: true
    });
    if (!u) {
        let newEmployee = new Parse.Object("Employee");
        newEmployee.set("Owner", req.object);
        await newEmployee.save({}, {
            useMasterKey: true
        });
    }

    const rquery = new Parse.Query(Parse.Role);
    rquery.equalTo("name", "employee");
    const employeeRole = await rquery.first({
        useMasterKey: true
    });
    employeeRole.relation("users").add(req.object);
    await employeeRole.save({}, {
        useMasterKey: true
    })
})