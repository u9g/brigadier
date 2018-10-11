import BuiltInExceptionProvider from "./BuiltInExceptionProvider";
import SimpleCommandExceptionType from "./SimpleCommandExceptionType";
import DynamicCommandExceptionType from "./DynamicCommandExceptionType";
import Dynamic2CommandExceptionType from "./Dynamic2CommandExceptionType";
export default class BuiltInExceptions implements BuiltInExceptionProvider {
    private static FLOAT_TOO_SMALL;
    private static FLOAT_TOO_BIG;
    private static INTEGER_TOO_SMALL;
    private static INTEGER_TOO_BIG;
    private static LITERAL_INCORRECT;
    private static READER_EXPECTED_START_OF_QUOTE;
    private static READER_EXPECTED_END_OF_QUOTE;
    private static READER_INVALID_ESCAPE;
    private static READER_INVALID_BOOL;
    private static READER_INVALID_INT;
    private static READER_EXPECTED_INT;
    private static READER_INVALID_FLOAT;
    private static READER_EXPECTED_FLOAT;
    private static READER_EXPECTED_BOOL;
    private static READER_EXPECTED_SYMBOL;
    private static DISPATCHER_UNKNOWN_COMMAND;
    private static DISPATCHER_UNKNOWN_ARGUMENT;
    private static DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR;
    private static DISPATCHER_PARSE_EXCEPTION;
    floatTooLow(): Dynamic2CommandExceptionType;
    floatTooHigh(): Dynamic2CommandExceptionType;
    integerTooLow(): Dynamic2CommandExceptionType;
    integerTooHigh(): Dynamic2CommandExceptionType;
    literalIncorrect(): DynamicCommandExceptionType;
    readerExpectedStartOfQuote(): SimpleCommandExceptionType;
    readerExpectedEndOfQuote(): SimpleCommandExceptionType;
    readerInvalidEscape(): DynamicCommandExceptionType;
    readerInvalidBool(): DynamicCommandExceptionType;
    readerInvalidInt(): DynamicCommandExceptionType;
    readerExpectedInt(): SimpleCommandExceptionType;
    readerInvalidFloat(): DynamicCommandExceptionType;
    readerExpectedFloat(): SimpleCommandExceptionType;
    readerExpectedBool(): SimpleCommandExceptionType;
    readerExpectedSymbol(): DynamicCommandExceptionType;
    dispatcherUnknownCommand(): SimpleCommandExceptionType;
    dispatcherUnknownArgument(): SimpleCommandExceptionType;
    dispatcherExpectedArgumentSeparator(): SimpleCommandExceptionType;
    dispatcherParseException(): DynamicCommandExceptionType;
}