import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaserulesRulesetArgsSourceFiles {
  content: string;
  fingerprint?: string;
  name: string;
}

export interface GoogleFirebaserulesRulesetArgsSource {
  language?: string;
  files: GoogleFirebaserulesRulesetArgsSourceFiles[];
}

export interface GoogleFirebaserulesRulesetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleFirebaserulesRulesetArgs {
  source: GoogleFirebaserulesRulesetArgsSource;
  timeouts?: GoogleFirebaserulesRulesetArgsTimeouts;
}

export class google_firebaserules_ruleset extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirebaserulesRulesetArgs) {
    const meta = {source:{isBlock:true,files:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebaserules_ruleset", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
