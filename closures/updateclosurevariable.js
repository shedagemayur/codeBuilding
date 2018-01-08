var code = (function($){
	var settings = {name: 'mayur'};

	function var_export (mixedExpression, boolReturn) {
		var echo = console.log;
		var retstr = ''
		var iret = ''
		var value
		var cnt = 0
		var x = []
		var i = 0
		var funcParts = []
		// We use the last argument (not part of PHP) to pass in
		// our indentation level
		var idtLevel = arguments[2] || 2
		var innerIndent = ''
		var outerIndent = ''
		var getFuncName = function (fn) {
			var name = (/\W*function\s+([\w$]+)\s*\(/).exec(fn)
			if (!name) {
				return '(Anonymous)'
			}
			return name[1]
		}
		var _makeIndent = function (idtLevel) {
			return (new Array(idtLevel + 1))
			.join(' ')
		}
		var __getType = function (inp) {
			var i = 0
			var match
			var types
			var cons
			var type = typeof inp
			if (type === 'object' && (inp && inp.constructor) &&
				getFuncName(inp.constructor) === 'LOCUTUS_Resource') {
				return 'resource'
			}
			if (type === 'function') {
				return 'function'
			}
			if (type === 'object' && !inp) {
			// Should this be just null?
			return 'null'
			}
			if (type === 'object') {
				if (!inp.constructor) {
					return 'object'
				}
				cons = inp.constructor.toString()
				match = cons.match(/(\w+)\(/)
				if (match) {
					cons = match[1].toLowerCase()
				}
				types = ['boolean', 'number', 'string', 'array']
				for (i = 0; i < types.length; i++) {
					if (cons === types[i]) {
						type = types[i]
						break
					}
				}
			}
			return type
		}
		var type = __getType(mixedExpression)
		if (type === null) {
			retstr = 'NULL'
		} else if (type === 'array') {
			outerIndent = _makeIndent(idtLevel - 2)
			innerIndent = _makeIndent(idtLevel)
			for (i in mixedExpression) {
				value = var_export(mixedExpression[i], 1, idtLevel + 2)
				value = typeof value === 'string' ? value.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;') : value
				x[cnt++] = value
			}
			iret = x.join(',');
			retstr = '[' + iret +']';
		} else if (type === 'object') {
			outerIndent = _makeIndent(idtLevel - 2)
			innerIndent = _makeIndent(idtLevel)
			for (i in mixedExpression) {
				value = var_export(mixedExpression[i], 1, idtLevel + 2)
				value = typeof value === 'string' ? value.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;') : value
				x[cnt++] = i + ':' + value;
			}
			iret = x.join(',')
			retstr = '{' + iret + '}'
		} else if (type === 'function') {
			funcParts = mixedExpression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/)

			retstr = "create_function ('" + funcParts[1] + "', '" +
			funcParts[2].replace(new RegExp("'", 'g'), "\\'") + "')"
		} else if (type === 'resource') {
		// Resources treated as null for var_export
		retstr = 'NULL'
		} else {
			retstr = typeof mixedExpression !== 'string' ? mixedExpression
			: "'" + mixedExpression.replace(/(["'])/g, '\\$1').replace(/\0/g, '\\0') + "'"
		}
		if (!boolReturn) {
			echo(retstr)
			return null
		}
		return retstr
	}
	return{
		getSttings(name){
			console.log('closure: ',settings);
			console.log('settings: ',eval(name));
		},
		setSttings(name, value){
			console.log('settings setted.', eval(name+'='+(var_export(value, true))));
		}
	}
})(code);

/**

How to use ?

1. To access seetings:
code.getSttings('settings');

o/p:

closure:  {name: "mayur"}
settings:  {name: "mayur"}

2. To set settings (override existing closure variable):
code.setSttings('settings',{'name','coreX'});

o/p:

settings setted. {name: "coreX"}

code.getSttings('settings');

o/p:

closure:  {name: "coreX"}
settings:  {name: "coreX"}

*/