function post_to_database(name, value, category) {
    $.ajax({
        'url': 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/',
        data:{
            'entryName': name,
            'entryValue': value,
            'categoryId': category
        }
    })
}