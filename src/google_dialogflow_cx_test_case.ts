import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputDtmf {
  digits?: string;
  finish_digit?: string;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputEvent {
  event: string;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputText {
  text: string;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInput {
  language_code?: string;
  dtmf?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputDtmf;
  event?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputEvent;
  text?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputText;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInput {
  enable_sentiment_analysis?: boolean;
  injected_parameters?: string;
  is_webhook_enabled?: boolean;
  input?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInput;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputCurrentPage {
  name?: string;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTextResponses {
  text?: string[];
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent {
  name?: string;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutput {
  session_parameters?: string;
  current_page?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputCurrentPage;
  text_responses?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTextResponses[];
  triggered_intent?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;
}

export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurns {
  user_input?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInput;
  virtual_agent_output?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutput;
}

export interface GoogleDialogflowCxTestCaseArgsTestConfig {
  flow?: string;
  page?: string;
  tracking_parameters?: string[];
}

export interface GoogleDialogflowCxTestCaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxTestCaseArgs {
  display_name: string;
  notes?: string;
  parent?: string;
  tags?: string[];
  test_case_conversation_turns?: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurns[];
  test_config?: GoogleDialogflowCxTestCaseArgsTestConfig;
  timeouts?: GoogleDialogflowCxTestCaseArgsTimeouts;
}

export class google_dialogflow_cx_test_case extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDialogflowCxTestCaseArgs) {
    const meta = {test_case_conversation_turns:{isBlock:true,user_input:{isBlock:true,input:{isBlock:true,dtmf:{isBlock:true},event:{isBlock:true},text:{isBlock:true}}},virtual_agent_output:{isBlock:true,current_page:{isBlock:true},text_responses:{isBlock:true},triggered_intent:{isBlock:true}}},test_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_test_case", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_test_result(): string {
    return `${this.resourceType}.${this.resourceName}.last_test_result`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
