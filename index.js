/**
 * Copyright 2015, Matthew Jaquish <mattjaq@yahoo.com>
 * Apache 2.0 License
 */

/*
 * This library depends on the convention of using process.env.NODE_ENV for
 * differentiating between 'development' and 'production'.
 *
 * This is a Babel plugin that replaces all instances of "__DEV__" with
 * "process.env.NODE_ENV !== 'production'" to allow dead-code removal in
 * minifiers and to make it easier to write debug and dev-specific code.
 */
module.exports = function(babel) {
    var t = babel.types;
    var DEV_EXPRESSION = t.binaryExpression(
        '!==',
        t.literal('production'),
        t.memberExpression(
            t.memberExpression(
                t.identifier('process'),
                t.identifier('env'),
                false
            ),
            t.identifier('NODE_ENV'),
            false
        )
    );

    return new babel.Transformer('babel-plugin-dev', {
        Identifier: {
            enter: function(node, parent) {
                if (this.isIdentifier({ name: '__DEV__'})) {
                    return DEV_EXPRESSION;
                }
            }
        }
    });
};
