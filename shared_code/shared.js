function call_shared_foo(arg)
{
  return arg + 'rendered';
}

module.exports.call_shared_foo = call_shared_foo;
console.log("Shared module loaded");