module.exports = function(fn, perpage){
  perpage = perpage || 10;
  return function(req, res, next){
    var page = Math.max(
      parseInt(req.param('page') || '1', 10),   //?page=1， /:page中值为1的/1，甚至提交的JSON数据{"page":1}，在
                                                //req.param中都是一样的
      1
    ) - 1;

    fn(function(err, total){
      if (err) return next(err);

      req.page = res.locals.page = {   //保存page属性以便将来引用
        number: page,
        perpage: perpage,
        from: page * perpage,
        to: page * perpage + perpage - 1,
        total: total,
        count: Math.ceil(total / perpage)
      };

      next();
    });
  }
};
