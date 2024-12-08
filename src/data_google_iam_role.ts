import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIamRoleArgs {
  name: string;
}

export class data_google_iam_role extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleIamRoleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iam_role", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get included_permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.included_permissions`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get stage(): string {
    return `data.${this.resourceType}.${this.resourceName}.stage`;
  }

  get title(): string {
    return `data.${this.resourceType}.${this.resourceName}.title`;
  }
}
