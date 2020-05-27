# Back-end

The API's url is <https://med-cab-vlapetr.herokuapp.com/api/med_cab>

### POST `/api/med_cab/register`

Make a post request to `/api/med_cab/register` with JSON in the following format:

```
{
	"name": "VLad",
	"email": "vlad@uni.com",
	"password": "password"
}
```

If the registration succeeds, you will receive a response formatted in the
following way:

```
{
	"message": "Vlad enjoy the App",
}
```

### POST `/api/med_cab/login`

Make a post request to `/api/med_cab/login` with JSON in the following format:

```
{
	"email": "vlad@uni.com",
	"password": "password"
}
```

If the login succeeds, you will receive a response formatted in the following
way:

```
{
	"message": "Welcome back Vlad"
}
```

### PUT `/api/med_cab/:id`

To access this endpoint, you must be logged in.

Make a put request to `/api/med_cab/:id` with JSON in the following format to change name of the user:

```
{
	"name": "Vlad"
}
```

After you submit PUT request `/api/med_cab/:id`, you will receive the following message:

```
{ 
	message: "User information updated" 
}
```


### DELETE `/api/med_cab/:id`

To access this endpoint, you must be logged in.

Make a delete request to `/api/med_cab/:id` and you will receive a response formatted in the following way:

```
{
	message: `User ${id} has been  deleted`
}

```

### GET `/api/med_cab/` 

GET all canabis list

To access this endpoint, you must be logged in.

```
{
      "Strain": "00-Og",
      "Type": "hybrid",
      "Rating": 4,
      "Effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
      "Flavor": "Earthy,Sweet,Citrus",
      "Description": "$100 OG is a 50/50 hybrid strain that...
}
```

### POST `/api/med_cab/` 

You can choose what type of cannabis you want to see and filter it by 

```
{
	"Type": "indica" or ( "Type": "sativa" or "Type": "hybrid" )
}
```

### POST  `/api/med_cab/:id` 

User can add like Strain of canabis.

To access this endpoint, you must be logged in.

After like has been successfully added you will get message:

```
{ 
message: `You liked ${data.strain}`
}
```

### GET `/api/med_cab/:id/liked` 

User can see what user has liked 

To access this endpoint, you must be logged in.

After requst you will get message:

```
{
 	  "liked": ["4K Gold"]
}
```

### POST  `/api/med_cab/:id/liked/:liked_id` 

User can add ailments they treated by specific type of canabis

To access this endpoint, you must be logged in.

After succes request you will get response 

```
{ 
	message: 'Thank you for your feedback'
}
```

### GET `/api/med_cab/:id/treated`

To access this endpoint, you must be logged in.

Here user can see what ailments they treated


After succes request you will see the treated way of cannabis types user has been added




