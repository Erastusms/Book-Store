# API DOCUMENTATION

Tryout Project from Code Academy

## Books Store

RESTFULL Endpoints

## USER
### GET /users

- Request
    - Request Header : none
    - Request Body : none
-Response
    - (200)
    ```json
    [
        {
            id: <user_id>,
            name: <user_name>,
            email:<user_emil>,
            password:<user_password>,
            state:<user_state>,
            birthdate:<user_birthdate>,
            gender:<user_gender>,
            avatar:<user_avatar>,
            type:<user_type>,
            createAt:<user_createAt>,
            updateAt:<user_updateAt>
        }
    ]
    ```
    - (500)
    ```json
    [
        {
            message : <err>
        }
    ]
    ```
### GET /users/profile
- Request
    - Request Header : 
     ```json
    {
        access_token
    }
    ```
    - Request Body : none
-Response
    - (200)
    ```json
    [
        {
            id: <user_id>,
            name: <user_name>,
            email:<user_emil>,
            password:<user_password>,
            state:<user_state>,
            birthdate:<user_birthdate>,
            gender:<user_gender>,
            avatar:<user_avatar>,
            type:<user_type>,
            createAt:<user_createAt>,
            updateAt:<user_updateAt>
        }
    ]
    ```
    - (500)
    ```json
    [
        {
            message : <err>
        }
    ]
    ```
### POST /users/register
- Request
    - Request Header : none
    - Request Body :
    ```json
    {
         id: <user_id>,
            name: <user_name>,
            email:<user_emil>,
            password:<user_password>,
            state:<user_state>,
            birthdate:<user_birthdate>,
            gender:<user_gender>,
            avatar:<user_avatar>,
            type:<user_type>
    }
    ```
- Response
    - (201)
    ```json
    [
        {
            id: <user_id>,
            name: <user_name>,
            email:<user_emil>,
            password:<user_password>,
            state:<user_state>,
            birthdate:<user_birthdate>,
            gender:<user_gender>,
            avatar:<user_avatar>,
            type:<user_type>,
            createAt:<user_createAt>,
            updateAt:<user_updateAt>
        }
    ]
    ```
    - (500)
    ```json
    [
        {
            message : <err>
        }
    ]
    ```
### POST /users/login
 - Request Header : none
    - Request Body :
    ```json
    {
        email:<user_emil>,
        password:<user_password>
    }
    ```
- Response
    - (200)
    ```json
    [
        {
            access_token
        }
    ]
    ```
    - (500)
    ```json
    [
        {
            message : <err>
        }
    ]
    ```
### PUT /users/update 
- Request
    - Request Header : 
     ```json
    {
        access_token
    }
    ```
    - Request Body:
    ```json
    {
        name: <user_name>,
        email:<user_emil>,
        state:<user_state>,
        birthdate:<user_birthdate>,
        gender:<user_gender>,
        avatar:<user_avatar>,
        type:<user_type>,
    }
    ```
- Response
    - (403)
    ```json
    {
        message : "email already exist!"
    }
    ```
    - (200)
    ```json
    {
        message : "data has been update"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### PUT /users/updatePwd
- Request
    - Request Header : 
     ```json
    {
        access_token
    }
    ```
    - Request Body:
    ```json
    {
        password:<user_password>,
        newPwd:<user_newPassword>,
        verPwd: <user_verPwd>,
    }
    ```
- Response
    - (200)
    ```json
    {
        message : "password has been update"
    }
    ```
    - (403)
     ```json
    {
        message : "password is wrong"
    }
    ```
    - (403)
     ```json
    {
        message : "password is Invalid"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### DELETE /users/delete/:id
- Request
    - Request Header :
    ```json
    {
        id = params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    {
        message : "id has been delete"
    }
    ```
    - (404)
    ```json
    {
        message : "id is not found!"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```

## PRODUCT
### GET /products
- Request
    - Request Header : 
    ```json
    {
        access_token
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            name:<product_name>,
            desc:<product_desc>,
            stock:<product_stock>,
            expire:<product_expire>,
            weight:<product_weight>,
            category:<product_category>,
            publisher:<product_publisher>,
            condition:<product_condition>,
            total_sold:<product_total_sold>,
            rating:<product_rating>,
            views:<product_views>,
            createAt:<product_createAt>,
            updateAt:<product_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### GET /products/:id
- Request
    - Request Header :
     ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            name:<product_name>,
            desc:<product_desc>,
            stock:<product_stock>,
            expire:<product_expire>,
            weight:<product_weight>,
            category:<product_category>,
            publisher:<product_publisher>,
            condition:<product_condition>,
            total_sold:<product_total_sold>,
            rating:<product_rating>,
            views:<product_views>,
            createAt:<product_createAt>,
            updateAt:<product_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### POST /products/create 
- - Request
    - Request Header :
     ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body :
    ```json
    {
        name:<product_name>,
        desc:<product_desc>,
        stock:<product_stock>,
        expire:<product_expire>,
        weight:<product_weight>,
        category:<product_category>,
        publisher:<product_publisher>,
        condition:<product_condition>
    }
    ```
- Response
     - (200)
    ```json
    {
        name:<product_name>,
        desc:<product_desc>,
        stock:<product_stock>,
        expire:<product_expire>,
        weight:<product_weight>,
        category:<product_category>,
        publisher:<product_publisher>,
        condition:<product_condition>,
        total_sold:<product_total_sold>,
        rating:<product_rating>,
        views:<product_views>,
        createAt:<product_createAt>,
        updateAt:<product_updateAt>
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### PUT /products/update/:id 
- Request
     - Request Header :
     ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body :
    ```json
    {
        name:<product_name>,
        desc:<product_desc>,
        stock:<product_stock>,
        expire:<product_expire>,
        weight:<product_weight>,
        category:<product_category>,
        publisher:<product_publisher>,
        condition:<product_condition>
    }
    ```
- Response
    - (200)
    ```json
    {
        message : "data has been update"
    }
    ```
    - (400)
    ```json
    {
        message : "id not found!"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### DELETE /products/delete/:id 
- Request
     - Request Header :
     ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    {
        message : "id has been delete"
    }
    ```
    - (400)
    ```json
    {
        message : "id is not found!"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```

## ORDER
### GET /orders
- Request
    - Request Header :
     ```json
    {
        access_token
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            id:<order_id>,
            name:<order_name>,
            subtotal:<order_subtotal>,
            discount:<order_discount>,
            tax:<order_tax>,
            total_due: <order_total_due>,
            total_qty:<order_total_qty>,
            pay_trx_number:<order_pay_trx_number>,
            city:<order_city>,
            address:<order_address>,
            UserId:<order_UserId>,
            createAt:<order_createAt>,
            updateAt:<order_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### GET /orders/:id 
- Request
    - Request Header :
     ```json
    {
        access_token,
        id: params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            id:<order_id>,
            name:<order_name>,
            subtotal:<order_subtotal>,
            discount:<order_discount>,
            tax:<order_tax>,
            total_due: <order_total_due>,
            total_qty:<order_total_qty>,
            pay_trx_number:<order_pay_trx_number>,
            city:<order_city>,
            address:<order_address>,
            UserId:<order_UserId>,
            createAt:<order_createAt>,
            updateAt:<order_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### POST /orders/create
- Request
    - Request Header :
     ```json
    {
        access_token
    }
    ```
    - Request Body :
    ```json
    {
        name:<order_name>,
        subtotal:<order_subtotal>,
        total_qty:<order_total_qty>,
        city:<order_city>,
        address:<order_address>,
    }
    ```
- Response
    - (403)
    ```json
    {
        message : "name already exist!"
    }
    ```
    - (200)
    ```json
    {
        message : "data has been create"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### PUT /orders/update/:id 
- Request
    - Request Header :
     ```json
    {
        access_token
    }
    ```
    - Request Body :
    ```json
    {
        name:<order_name>,
        subtotal:<order_subtotal>,
        total_qty:<order_total_qty>,
        city:<order_city>,
        address:<order_address>,
    }
    ```
- Response
    - (403)
    ```json
    {
        message : "name already exist!"
    }
    ```
    - (200)
    ```json
    {
        message : "data has been create"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### DELETE /orders/delete/:id
- Request
     - Request Header :
     ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    {
        message : "id has been delete"
    }
    ```
    - (400)
    ```json
    {
        message : "id is not found!"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```

## SHOPPING_CARTS
### GET /carts
- Request
    - Request Header :
     ```json
    {
        access_token
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
          id:<shopping_cart_id>,
          status:<shopping_cart_status>,
          UserId:<shopping_cart_UserId>,
          createAt:<shopping_cart_createAt>,
          updateAt:<shopping_cart_updateAt>  
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### GET /carts/myCarts
- Request
    - Request Header :
     ```json
    {
        access_token
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
          id:<shopping_cart_id>,
          status:<shopping_cart_status>,
          UserId:<shopping_cart_UserId>,
          createAt:<shopping_cart_createAt>,
          updateAt:<shopping_cart_updateAt>  
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### GET /carts/:id 
- Request
    - Request Header :
     ```json
    {
        access_token,
        id: params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
          id:<shopping_cart_id>,
          status:<shopping_cart_status>,
          UserId:<shopping_cart_UserId>,
          createAt:<shopping_cart_createAt>,
          updateAt:<shopping_cart_updateAt>  
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### POST /carts/create
- Request
    - Request Header :
    ```json
    {
        access_token
    }
    ```
    - Request Body :
    ```json
    {
        status:<shopping_cart_status>
    }
    ```
- Response
    - (200)
    ```json
    [
        {
          id:<shopping_cart_id>,
          status:<shopping_cart_status>,
          UserId:<shopping_cart_UserId>,
          createAt:<shopping_cart_createAt>,
          updateAt:<shopping_cart_updateAt>  
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### PUT /carts/update/:id 
- Request
    - Request Header :
    ```json
    {
        access_token,
        id: params.id
    }
    ```
    - Request Body :
    ```json
    {
        status:<shopping_cart_status>
    }
    ```
- Response
    - (200)
    ```json
    {
        message : "data has been update"
    }
    ```
    - (400)
    ```json
    {
        message : "id not found!"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### DELETE /carts/delete/:id
- Request
    - Request Header :
    ```json
    {
        access_token,
        id: params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    {
        message : "id has been delete"
    }
    ```
    - (400)
    ```json
    {
        message : "id is not found!"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```

## LINE_ITEMS
### GET /items
- Request
    - Request Header :
    ```json
    {
        access_token
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            id:<line_items_id>,
            qty:<line_items_qty>,
            status:<line_items_status>,
            ProductId:<line_items_ProductId>
            ShoppingCartId:<line_items_ShoppingCartId>,
            OrderId:<line_items_OrderId>,
            uniqId:<line_items_uniqId>,
            createAt:<line_items_createAt>,
            updateAt:<line_items_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### GET /items/:id
- Request
    - Request Header :
    ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            id:<line_items_id>,
            qty:<line_items_qty>,
            status:<line_items_status>,
            ProductId:<line_items_ProductId>
            ShoppingCartId:<line_items_ShoppingCartId>,
            OrderId:<line_items_OrderId>,
            uniqId:<line_items_uniqId>,
            createAt:<line_items_createAt>,
            updateAt:<line_items_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### POST /items/create
- Request
    - Request Header :
    ```json
    {
        access_token
    }
    ```
    - Request Body :
    ```json
    {
        qty:<line_items_qty>,
        status:<line_items_status>,
        ProductId:<line_items_ProductId>
        ShoppingCartId:<line_items_ShoppingCartId>,
        OrderId:<line_items_OrderId>
    }
    ```
- Response
    - (200)
    ```json
    [
        {
            id:<line_items_id>,
            qty:<line_items_qty>,
            status:<line_items_status>,
            ProductId:<line_items_ProductId>
            ShoppingCartId:<line_items_ShoppingCartId>,
            OrderId:<line_items_OrderId>,
            uniqId:<line_items_uniqId>,
            createAt:<line_items_createAt>,
            updateAt:<line_items_updateAt>
        }
    ]
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```
### PUT /items/update/:id
- Request
    - Request Header :
    ```json
    {
        access_token
    }
    ```
    - Request Body :
    ```json
    {
        qty:<line_items_qty>,
        status:<line_items_status>,
        ProductId:<line_items_ProductId>
        ShoppingCartId:<line_items_ShoppingCartId>,
        OrderId:<line_items_OrderId>
    }
    ```
- Response
     - (200)
    ```json
    {
        message : "data has been update"
    }
    ```
    - (400)
    ```json
    {
        message : "id not found!"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### DELETE /items/delete/:id
- Request
    - Request Header :
    ```json
    {
        access_token,
        id: params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    {
        message : "id has been delete"
    }
    ```
    - (400)
    ```json
    {
        message : "id is not found!"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```

## PRODUCT_IMAGE
### GET /images
- Request
    - Request Header :
    ```json
    {
        access_token
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            id:<product_images_id>,
            filename:<product_images_filename>,
            filesize:<product_images_filesize>,
            filetype:<product_images_filetype>,
            primary:<product_images_primary>,
            ProductId:<product_images_ProductId>,
            createAt:<product_images_createAt>,
            updateAt:<product_images_updateAt>
        }
    ]
    ```
    - (500)
    ```json
    {
        message: <err>
    }
    ```
### GET /images/:ProductId
- Request
    - Request Header :
    ```json
    {
        access_token,
        ProdutId: params.ProductId
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    [
        {
            id:<product_images_id>,
            filename:<product_images_filename>,
            filesize:<product_images_filesize>,
            filetype:<product_images_filetype>,
            primary:<product_images_primary>,
            ProductId:<product_images_ProductId>,
            createAt:<product_images_createAt>,
            updateAt:<product_images_updateAt>
        }
    ]
    ```
    - (500)
    ```json
    {
        message: <err>
    }
    ```
### POST /images/create
- Request
    - Request Header :
    ```json
    {
        access_token
    }
    ```
    - Request Body :
    ```json
    {
        filename:<product_images_filename>,
        filesize:<product_images_filesize>,
        filetype:<product_images_filetype>,
        primary:<product_images_primary>,
        ProductId:<product_images_ProductId>,
    }
    ```
- Response
     - (200)
    ```json
    [
        {
            id:<product_images_id>,
            filename:<product_images_filename>,
            filesize:<product_images_filesize>,
            filetype:<product_images_filetype>,
            primary:<product_images_primary>,
            ProductId:<product_images_ProductId>,
            createAt:<product_images_createAt>,
            updateAt:<product_images_updateAt>
        }
    ]
    ```
    - (500)
    ```json
    {
        message: <err>
    }
    ```
### PUT /images/update/:id
- Request Header :
    ```json
    {
        access_token,
        id : params.id
    }
    ```
    - Request Body :
    ```json
    {
        filename:<product_images_filename>,
        filesize:<product_images_filesize>,
        filetype:<product_images_filetype>,
        primary:<product_images_primary>,
        ProductId:<product_images_ProductId>,
    }
    ```
- Response
    - (200)
    ```json
    {
        message : "data has been update"
    }
    ```
    - (400)
    ```json
    {
        message : "id not found!"
    }
    ```
    - (500)
    ```json
    {
        message : <err>
    }
    ```
### DELETE /images/delete/:id
- Request
    - Request Header :
    ```json
    {
        access_token,
        id: params.id
    }
    ```
    - Request Body : none
- Response
    - (200)
    ```json
    {
        message : "id has been delete"
    }
    ```
    - (400)
    ```json
    {
        message : "id is not found!"
    }
    ```
    - (500)
     ```json
    {
        message : <err>
    }
    ```