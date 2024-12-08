import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxIntentArgsParameters {
  entity_type: string;
  id: string;
  is_list?: boolean;
  redact?: boolean;
}

export interface GoogleDialogflowCxIntentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxIntentArgsTrainingPhrasesParts {
  parameter_id?: string;
  text: string;
}

export interface GoogleDialogflowCxIntentArgsTrainingPhrases {
  repeat_count?: number;
  parts: GoogleDialogflowCxIntentArgsTrainingPhrasesParts[];
}

export interface GoogleDialogflowCxIntentArgs {
  description?: string;
  display_name: string;
  is_default_negative_intent?: boolean;
  is_default_welcome_intent?: boolean;
  is_fallback?: boolean;
  labels?: { [key: string]: string };
  language_code?: string;
  parent?: string;
  priority?: number;
  parameters?: GoogleDialogflowCxIntentArgsParameters[];
  timeouts?: GoogleDialogflowCxIntentArgsTimeouts;
  training_phrases?: GoogleDialogflowCxIntentArgsTrainingPhrases[];
}

export class google_dialogflow_cx_intent extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDialogflowCxIntentArgs) {
    const meta = {parameters:{isBlock:true},timeouts:{isBlock:true},training_phrases:{isBlock:true,parts:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_intent", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
