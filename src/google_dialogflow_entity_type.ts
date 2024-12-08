import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowEntityTypeArgsEntities {
  synonyms: string[];
  value: string;
}

export interface GoogleDialogflowEntityTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowEntityTypeArgs {
  display_name: string;
  enable_fuzzy_extraction?: boolean;
  kind: string;
  entities?: GoogleDialogflowEntityTypeArgsEntities[];
  timeouts?: GoogleDialogflowEntityTypeArgsTimeouts;
}

export class google_dialogflow_entity_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDialogflowEntityTypeArgs) {
    const meta = {entities:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_entity_type", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
