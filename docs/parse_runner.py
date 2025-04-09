import micropip

await micropip.install("regex")
await micropip.install("lark")
import json

from lark import Lark, Token, Tree


def tree_to_dict(node):
    if isinstance(node, Tree):
        children = [tree_to_dict(c) for c in node.children]
        child_start = [c["start_pos"] for c in children if c.get("start_pos") is not None]
        child_end = [c["end_pos"] for c in children if c.get("end_pos") is not None]
        return {
            "type": "rule",
            "name": node.data,
            "children": children,
            "start_pos": min(child_start) if child_start else None,
            "end_pos": max(child_end) if child_end else None,
        }
    if isinstance(node, Token):
        return {
            "type": "token",
            "name": node.type,
            "value": node.value,
            "hidden": node.type.startswith("_"),
            "start_pos": getattr(node, "start_pos", None),
            "end_pos": getattr(node, "end_pos", None),
        }
    return None


def parse_input(grammar, text, start, parser, lexer, debug, strict, regex):
    parser_instance = Lark(
        grammar,
        start=start,
        parser=parser,
        lexer=lexer,
        debug=debug,
        strict=strict,
        regex=regex,
        keep_all_tokens=True,
        propagate_positions=True,
    )
    tree = parser_instance.parse(text)
    return json.dumps(tree_to_dict(tree))
