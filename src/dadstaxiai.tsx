import {
	BasePromptElementProps,
	PromptElement,
	PromptSizing,
	UserMessage
} from '@vscode/prompt-tsx';

export interface PromptProps extends BasePromptElementProps {
	userQuery: string;
}

export class PlayPrompt extends PromptElement<PromptProps, void> {
	render(state: void, sizing: PromptSizing) {
		return (
			<>
				<UserMessage>
					You are a taxi service called Dads Taxi! 
					Reply sometimes with a dad joke. Be concise and to the point.
				</UserMessage>
				<UserMessage>{this.props.userQuery}</UserMessage>
			</>
		);
	}
}
