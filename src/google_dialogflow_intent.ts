import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowIntentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowIntentArgs {
  default_response_platforms?: string[];
  display_name: string;
  events?: string[];
  input_context_names?: string[];
  timeouts?: GoogleDialogflowIntentArgsTimeouts;
}

export class google_dialogflow_intent extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDialogflowIntentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_intent", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get followup_intent_info(): string {
    return `${this.resourceType}.${this.resourceName}.followup_intent_info`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get is_fallback(): string {
    return `${this.resourceType}.${this.resourceName}.is_fallback`;
  }

  get ml_disabled(): string {
    return `${this.resourceType}.${this.resourceName}.ml_disabled`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_followup_intent_name(): string {
    return `${this.resourceType}.${this.resourceName}.parent_followup_intent_name`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reset_contexts(): string {
    return `${this.resourceType}.${this.resourceName}.reset_contexts`;
  }

  get root_followup_intent_name(): string {
    return `${this.resourceType}.${this.resourceName}.root_followup_intent_name`;
  }

  get webhook_state(): string {
    return `${this.resourceType}.${this.resourceName}.webhook_state`;
  }
}
