import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowAgentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowAgentArgs {
  avatar_uri?: string;
  classification_threshold?: number;
  default_language_code: string;
  description?: string;
  display_name: string;
  enable_logging?: boolean;
  supported_language_codes?: string[];
  tier?: string;
  time_zone: string;
  timeouts?: GoogleDialogflowAgentArgsTimeouts;
}

export class google_dialogflow_agent extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDialogflowAgentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_agent", resourceName);
  }

  get api_version(): string {
    return `${this.resourceType}.${this.resourceName}.api_version`;
  }

  get avatar_uri_backend(): string {
    return `${this.resourceType}.${this.resourceName}.avatar_uri_backend`;
  }

  get default_language_code(): string {
    return `${this.resourceType}.${this.resourceName}.default_language_code`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get match_mode(): string {
    return `${this.resourceType}.${this.resourceName}.match_mode`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get time_zone(): string {
    return `${this.resourceType}.${this.resourceName}.time_zone`;
  }
}
