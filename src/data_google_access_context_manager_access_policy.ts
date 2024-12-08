import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAccessContextManagerAccessPolicyArgs {
  parent: string;
  scopes?: string[];
}

export class data_google_access_context_manager_access_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleAccessContextManagerAccessPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_access_context_manager_access_policy", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get title(): string {
    return `data.${this.resourceType}.${this.resourceName}.title`;
  }
}
