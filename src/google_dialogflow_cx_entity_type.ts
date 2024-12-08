import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxEntityTypeArgsEntities {
  synonyms?: string[];
  value?: string;
}

export interface GoogleDialogflowCxEntityTypeArgsExcludedPhrases {
  value?: string;
}

export interface GoogleDialogflowCxEntityTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxEntityTypeArgs {
  auto_expansion_mode?: string;
  display_name: string;
  enable_fuzzy_extraction?: boolean;
  kind: string;
  language_code?: string;
  parent?: string;
  redact?: boolean;
  entities: GoogleDialogflowCxEntityTypeArgsEntities[];
  excluded_phrases?: GoogleDialogflowCxEntityTypeArgsExcludedPhrases[];
  timeouts?: GoogleDialogflowCxEntityTypeArgsTimeouts;
}

export class google_dialogflow_cx_entity_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDialogflowCxEntityTypeArgs) {
    const meta = {entities:{isBlock:true},excluded_phrases:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_entity_type", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kind(): string {
    return `${this.resourceType}.${this.resourceName}.kind`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
