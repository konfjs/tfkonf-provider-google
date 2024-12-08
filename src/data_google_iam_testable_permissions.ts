import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIamTestablePermissionsArgs {
  custom_support_level?: string;
  full_resource_name: string;
  stages?: string[];
}

export class data_google_iam_testable_permissions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleIamTestablePermissionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iam_testable_permissions", resourceName);
  }

  get full_resource_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.full_resource_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions`;
  }
}
