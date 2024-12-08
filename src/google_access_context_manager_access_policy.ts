import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAccessContextManagerAccessPolicyArgs {
  parent: string;
  scopes?: string[];
  title: string;
  timeouts?: GoogleAccessContextManagerAccessPolicyArgsTimeouts;
}

export class google_access_context_manager_access_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerAccessPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_access_policy", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
