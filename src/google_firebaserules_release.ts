import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaserulesReleaseArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleFirebaserulesReleaseArgs {
  name: string;
  ruleset_name: string;
  timeouts?: GoogleFirebaserulesReleaseArgsTimeouts;
}

export class google_firebaserules_release extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirebaserulesReleaseArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebaserules_release", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get disabled(): string {
    return `${this.resourceType}.${this.resourceName}.disabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get ruleset_name(): string {
    return `${this.resourceType}.${this.resourceName}.ruleset_name`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
